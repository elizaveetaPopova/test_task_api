(function () {
    'use strict';
  
    const server = require('../../server');
    const fs = require('fs');
    
    module.exports = {
        getManufacturers
    };
  
  
    async function getManufacturers(req, res, next) {
      try {
        const data = fs.readFileSync('manufacturers.json');
        const manufacturers = JSON.parse(data)
        res.status(200).send(manufacturers);
      } catch (error) {
        next(error);
      }
    }
  
  })();
  