let singleton = Symbol();
let singletonEnforce = Symbol();
const moment = require('moment');
moment().format();

/**
 * Represents "Singleton" service CarPrediction 
 * Gets only one instance of CarPredictionService by getInstance
 */
class CarPredictionService {

    constructor(enforce) {
        if (enforce != singletonEnforce) {
            throw new Error('Cannot construct CarPredictionService singleton');
        }
    }

    /**
     * Gets singleton CarPredictionService
     */
    static getInstance() {
        if (!this[singleton]) {
            this[singleton] = new CarPredictionService(singletonEnforce);
        }
        return this[singleton];
    }

    /**
     * Resolve prediction car can gets out on road
     * @param {carPrediction} carPrediction carPredictionModel
     */
    resolveCarPrediction(carPrediction) {
        try {
            // console.log('service', carPrediction);
            if (!carPrediction) {
                return;
            }
            let date = moment(carPrediction.date, 'YYYY-MM-DD', true);
            let time = moment(carPrediction.time, 'HH:mm a');


            /* if (time.isValid()) {
                console.log(time);
            } else {
                throw new Error('Error, time is not valid (hh:mm format)')
            }*/
            let startMorning = moment('07:00 am', 'HH:mm a');
            let endMorning = moment('09:30 am', 'HH:mm a');
            let startAfternoon = moment('16:00 pm', 'HH:mm a');
            let endAfternoon = moment('19:30 pm', 'HH:mm a');

            if (time.isBetween(startMorning, endMorning) || time.isBetween(startAfternoon, endAfternoon)) {
                console.log('dentro de la hora no puede circular');
            } else {
                console.log('fuera de la hora');
            }

            /*if (date.isValid()) {
                console.log(date.day());
                console.log(date.isValid());
            } else {
                throw new Error('Error, date is not valid (YYYY-MM-DD format)')
            }*/


            switch (date.day()) {
                case 1:

                    break;

                case 2:
                    break;

                case 3:
                    break;

                case 4:
                    break;

                case 5:
                    break;
                default:
                    break;
            }

        } catch (error) {
            throw new Error('Error, cannot resolvePrediction');
        }
    }

}

module.exports = CarPredictionService;