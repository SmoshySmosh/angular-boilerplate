// Protractor Configuration
// Created by Ethan Pursley
var browsers = require('./config/browsers');
exports.config = {
    specs: [
        './e2e/**/*.spec.js'
    ],
    baseUrl: 'http://localhost:9000/',
    multiCapabilities: [
        browsers.chrome
    ],
    directConnect: true
};
