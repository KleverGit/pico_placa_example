/**
 * Represetns object about car predictio;n
 */
class CarPrediction {

    constructor() {
        // Represents plate
        this._carId = null;
        // date car can leave
        this._date = null;
        // hour, minute casr can leave
        this._time = null;
    }

    /**
     * Getters and setters
     */
    get carId () {
        return this._carId;
    }

    set carId (carId) {
        this._carId = carId;
    }

    get date () {
        return this._date;
    }

    set date (date) {
        this._date = date;
    }

    get time () {
        return this._time;
    }

    set time (time) {
        this._time = time;
    }
  
}

module.exports = CarPrediction;