/**
 * Represetns object about car predictio;n
 */
class CarPrediction {

    constructor() {
        // Represents plate
        this._licencePlate = null;
        // date car can leave
        this._date = null;
        // hour, minute casr can leave
        this._time = null;
        this._status = null;
    }

    /**
     * Getters and setters
     */
    get licencePlate () {
        return this._licencePlate;
    }

    set licencePlate (licencePlate) {
        this._licencePlate = licencePlate;
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

    get status () {
        return this._status;
    }

    set status (status) {
        this._status = status;
    }
  
}

module.exports = CarPrediction;