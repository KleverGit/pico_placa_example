'use strict'
var expect = require("chai").expect;
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require('../server/server');
chai.use(chaiHttp);

// name of app
describe('pico placa prediction', function () {
    // name of resource
    describe('POST getPrediction', function () {
        // A kind of test 
        it('Should return json as default data format', function (done) {
            chai.request(server)
                .post('/getPrediction')
                .send({
                    "licencePlate": "PDF3413",
                    "date": "2020-04-06",
                    "time": "06:21 pm"
                })
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.should.be.json;
                    expect(res.statusCode).to.equal(200);
                    done();
                });
        });
    });
});
