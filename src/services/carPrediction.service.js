let singleton = Symbol();
let singletonEnforce = Symbol();

/**
 * Represents "Singleton" service CarPrediction 
 * Gets only one instance of CarPredictionService by getInstance
 */
class CarPredictionService {

    constructor(enforce) {
        if (enforce != singletonEnforce) {
            throw new ServerException('Cannot construct CarPredictionService singleton');
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
        console.log('service', carPrediction);
    }

}

module.exports = CarPredictionService;