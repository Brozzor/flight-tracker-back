const axios = require('axios')

module.exports = {
    findAndSaveFlights: async function (plane){
        const end = parseInt(new Date().getTime() / 1000)
        const begin = end - 604800
        const { data: lastFlights } = await axios.get(sails.config.opensky.baseUrl + "flights/aircraft?icao24="+ plane.icao +"&begin=" + begin + "&end=" + end + "&limit=100&offset=0")
        for (const flight of lastFlights) {
            const isAlreadyExist = await Flight.findOne({
                icao: flight.icao24,
                firstSeen: flight.firstSeen,
                lastSeen: flight.lastSeen,
            })
            if (isAlreadyExist) continue
            try {
                await Flight.create({
                    icao: flight.icao24,
                    firstSeen: flight.firstSeen,
                    lastSeen: flight.lastSeen,
                    from: flight.estDepartureAirport,
                    to: flight.estArrivalAirport,
                    plane_id: plane.id,
                    duration: flight.lastSeen - flight.firstSeen
                })
            } catch (error) {
                console.error(error)
            }
            
        }
    }
}