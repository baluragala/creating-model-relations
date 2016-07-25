// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-relations
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

module.exports = function(app) {
  var Customer = app.models.Customer;
  var Order = app.models.Order;


  app.dataSources.db.automigrate('Customer', function(err) {
    if (err) throw err;

    var customers = [
      {name: 'Moksha', age: 21},
      {name: 'Harsha', age: 22},
      {name: 'Raksha', age: 23},
      {name: 'Siksha', age: 24}
      ];
    var orders = [
      {
        description: 'First order by Moksha',
        total:120,
        date: '01-01-2015'
      },
      {
        description: 'Second order by Moksha',
        total:300,
        date: '02-01-2015'
      },
      {
        description: 'Order by Harsha',
        total:1210,
        date: '03-01-2015'
      },
      {
        description: 'Order by Raksha',
        total:520,
        date: '04-01-2015'
      },
      {
        description: 'Third Order by Moksha',
        total:100,
        date: '05-01-2015'
      }
    ];

    // Create customers and orders
    Customer.create(customers[0], function(err, instance) {
      if (err) return console.error(err);
      console.log('Customer created:: ', instance);
      orders[0].customerId = instance.id;
      orders[1].customerId = instance.id;
      orders[4].customerId = instance.id;
      Order.create(orders[0], function(err, instance) {
        if (err) return console.error(err);
        console.log('Order created: ', instance);
      });
      Order.create(orders[1], function(err, instance) {
        if (err) return console.error(err);
        console.log('Order created: ', instance);
      });
      Order.create(orders[4], function(err, instance) {
        if (err) return console.error(err);
        console.log('Order created: ', instance);
      });
    });
    Customer.create(customers[1], function(err, instance) {
      if (err) return console.error(err);
      console.log('Customer created:: ', instance);
      orders[2].customerId = instance.id;
      Order.create(orders[2], function(err, instance) {
        if (err) return console.error(err);
        console.log('Order created: ', instance);
      });
    });
    Customer.create(customers[2], function(err, instance) {
      if (err) return console.error(err);
      console.log('Customer created: ', instance);
      orders[3].customerId = instance.id;
      Order.create(orders[3], function(err, instance) {
        if (err) return console.error(err);
        console.log('Order created: ', instance);
      });
    });
    Customer.create(customers[3], function(err, instance) {
      if (err) return console.error(err);
      console.log('Customer created:: ', instance);

    });
  });
};
