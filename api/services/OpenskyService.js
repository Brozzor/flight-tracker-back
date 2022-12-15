const axios = require('axios')

module.exports = {
    refreshFlightList: async function(){
        const planes = await Plane.find()
        for (const plane of planes) {
          await OpenskyService.findAndSaveFlights(plane)
        }
    },

    findAndSaveFlights: async function (plane){
        const end = parseInt(new Date().getTime() / 1000)
        const begin = end - (604800 * 2)
        const { data: lastFlights } = await axios.get(sails.config.opensky.baseUrl + "flights/aircraft?icao24="+ plane.icao +"&begin=" + begin + "&end=" + end + "&limit=100&offset=0")
        for (const flight of lastFlights) {
            const isFlightExist = await Flight.findOne({
                icao: flight.icao24,
                firstSeen: flight.firstSeen,
                lastSeen: flight.lastSeen,
            })
            if (isFlightExist) continue

            const airportFrom = await OpenskyService.findAndSaveAirport(flight.estDepartureAirport)
            const airportTo = await OpenskyService.findAndSaveAirport(flight.estArrivalAirport)

            try {
                await Flight.create({
                    icao: flight.icao24,
                    firstSeen: flight.firstSeen,
                    lastSeen: flight.lastSeen,
                    from: airportFrom,
                    to: airportTo,
                    plane: plane.id,
                    duration: flight.lastSeen - flight.firstSeen
                })
            } catch (error) {
                console.error(error)
            }
            
        }
    },

    findAndSaveAirport: async function(icao){
        const airport = await Airport.findOne({icao})
        if (!icao) return null
        if (airport) return airport.id
        let newAirport
        try {
            const { data } = await axios.get(sails.config.opensky.baseUrl + "airports/?icao="+ icao)
            newAirport = await Airport.create({
                icao: data.icao,
                iata: data.iata,
                name: data.name,
                longitude: data.position.longitude,
                latitude: data.position.latitude,
                region: data.region,
                country: data.country
            }).fetch()
        } catch (error) {
            console.error(error)
            return null
        }
        
        return newAirport.id
    }
}