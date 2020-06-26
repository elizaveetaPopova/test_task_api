(function () {
    'use strict';
  
    const ManufacturersController = require('./manufacturers.controller');
  
    module.exports = function (app) {
      app.get('/api/manufacturers', ManufacturersController.getManufacturers);
    };
  })();
  