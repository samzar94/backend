'use strict'

  var mongoose = require('mongoose');
  var app= require('./app');
  var port=process.env.PORT|| 3977;

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost:27017/curso_mean',(err,res) => {
    if(err){
      console.log("algo paso");
      throw err;
    }else{
      console.log("la conexion a la base de datos fue correcta");

      app.listen(port,(req,res)=>{
        console.log("servidor del api rest de musica escuchando en http://localhost"+port);
      })
    }
  });
