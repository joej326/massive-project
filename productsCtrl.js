
var app = require('./server.js');
var db = app.get('db');

module.exports = {

  getProducts: function(req,res){
    



    var id = req.query.id;
    //console.log(id);
    if(id){
      db.product([id],function(err,product){
        res.send(product);
      })
    }else{
  db.products(function(err,products){
    console.log(err);
    res.send(products);
      })
    }
  }

};
