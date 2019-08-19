//require  the models
var db = require("../models");

//routes -----------------------------------------------------------
module.exports = function(app) {
  // Get route for retrieving a single customer
  app.get("/api/customers/:id", function(req, res) {
    db.Customer.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbCustomer) {
        console.log(dbCustomer);
        res.json(dbCustomer);
      });
  });

// POST route for saving a new customer
  app.post("/api/customers", function(req, res) {
    db.Customers.create(req.body).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  // Delete an customer by id
  app.delete("/api/customers/:id", function(req, res) {
    db.Customer.destroy({
         where:
          { id: req.params.id 
        } 
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  // PUT route for updating customer
  app.put("/api/posts", function(req, res) {
    db.Customer.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

};
