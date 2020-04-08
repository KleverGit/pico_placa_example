const CarPrediction = require('../models/carPrediction.model');
const CarPredictionUtils = require ('../utils/carPrediction.utils') ;
const express = require('express');
const app = express();

/**
 * Get prediction pico placa
 */
app.post('/getPrediction', (req, res) => {
    let body = req.body;
    
    const carPrediction = CarPredictionUtils.buildCarPredictionModel(body);

    console.log(carPrediction) ;
    return res.status(200).json({
        code: 200,
        message: 'Entra ws',
        body: body

    })

});

module.exports = app;