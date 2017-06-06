var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./.config.js')
// var _ = require('lodash');  //lodash is set as '_' by convention
var app = module.exports = express();
app.use(bodyParser.json());


var db = massive.connectSync({
  connectionString: config.connectionString
})


app.set('db', db);
var productsCtrl = require('./productsCtrl.js');


app.get('/', productsCtrl.getProducts);



app.listen(8000, function() {
  console.log("good to go");
});
