const CONSTANTS = require('../../config/constants/constants');
const moment = require('moment');
const startMorning = moment('07:00 am', 'HH:mm a');
const endMorning = moment('09:30 am', 'HH:mm a');
const startAfternoon = moment('16:00 pm', 'HH:mm a');
const endAfternoon = moment('19:30 pm', 'HH:mm a');
let singleton = Symbol();
let singletonEnforce = Symbol();

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
     * Resolve carPrediction, if it can gets out on road
     * @param {carPrediction} carPrediction carPredictionModel
     */
    resolveCarPrediction(carPrediction) {
        return new Promise((resolve, reject) => {
            //  Validations
            // licence plate validation
            if (!carPrediction.licencePlate) {
                reject(new Error('Error, licencePlate is empty'));
            }
            // date validation
            let date = moment(carPrediction.date, 'YYYY-MM-DD', true);
            if (!date.isValid()) {
                reject(new Error('Error, date is not valid, it must have (YYYY-MM-DD) format'));
            }
            // time validation
            let time = moment(carPrediction.time, 'HH:mm a');
            if (!time.isValid()) {
                reject(new Error('Error, time is not valid, it must have  (HH: mm am / pm) format'));
            }
            // gets last digit licencePlate
            let lastDigitPlate = (carPrediction.licencePlate).substr(carPrediction.licencePlate.length - 1);
            let plateDayConst = CONSTANTS.DAY_PLATE[moment(date).format('dddd').toUpperCase()];

            if (plateDayConst && plateDayConst.AVAILABLE_PLATES && plateDayConst.AVAILABLE_PLATES.includes(Number(lastDigitPlate))) {
                carPrediction.status = 'Can gets on road free';
            } else {
                if (time.isBetween(startMorning, endMorning) || time.isBetween(startAfternoon, endAfternoon)) {
                    carPrediction.status = 'Cannot gets on road at ' + time.format('HH:mm a');
                } else {
                    carPrediction.status = 'Can gets on road free';
                }
            }
            resolve(carPrediction);
        });
    }
}

module.exports = CarPredictionService;