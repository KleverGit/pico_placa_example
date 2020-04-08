const CarPredictionUtils = require('../utils/carPrediction.utils');
const CarPredictionService = require('../services/carPrediction.service');
const express = require('express');
const app = express();

/**
 * Get prediction pico placa
 */
app.post('/getPrediction', (req, res) => {
    let body = req.body;
    if (!body) {
        return res.status(400).json({
            code: 400,
            message: 'Empty body request'
        });
    }
    // build car prediction model
    const carPrediction = CarPredictionUtils.buildCarPredictionModel(body);

    // resolve if car can gets on road via Promise
    CarPredictionService.getInstance().resolveCarPrediction(carPrediction).then(carPredictionResult => {
        return res.status(200).json({
            code: 200,
            message: carPredictionResult.status,
        });
    }).catch(error => {
        return res.status(400).json({
            code: 400,
            message: error.message
        });
    });
});

module.exports = app;