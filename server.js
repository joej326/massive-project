var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
// var _ = require('lodash');  //lodash is set as '_' by convention
var app = module.exports = express();
app.use(bodyParser.json());


var db = massive.connectSync({
  connectionString: 'postgres://mpawjhpkispfat:01e5847789c6ff4adf70c6eddbf3df26413ad0db96c370fb84aee136723a6e41@ec2-54-83-26-65.compute-1.amazonaws.com:5432/dblrdv1kj715un?ssl=true',
})


app.set('db', db);
var productsCtrl = require('./productsCtrl.js');


app.get('/', productsCtrl.getProducts);



app.listen(8000, function() {
  console.log("good to go");
});
