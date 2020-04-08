const CarPrediction = require('../models/carPrediction.model');

/**
 * Represents carPrediction utils to manage objects and operations
 */
class CarPredictionUtils {

    /**
     * Return CarPRediction model
     * @param {body} body request body
     */
    static buildCarPredictionModel (body) {
        const carPrediction = new CarPrediction();
        carPrediction.carId = body.carId;
        carPrediction.date = body.date;
        carPrediction.time = body.time;
        return carPrediction;
    }

}

module.exports = CarPredictionUtils;