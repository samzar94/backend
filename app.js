  'use strict'
  const express = require('express');
  const bodyparser = require('body-parser');

  var app=express();

  //cargar rutas
  var user_routes=require('./routes/user');
  var artist_routes=require('./routes/artist');
  var album_routes=require('./routes/album') ;
  var song_routes=require('./routes/song');

  app.use(bodyparser.urlencoded({extended:false}));
  app.use(bodyparser.json());

  //configurar cabeceras http
    app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin, X-Requested-With,Content-Type,Accep,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
  });


  //carga de rutas base
  app.use('/api',user_routes);
  app.use('/api',artist_routes);
  app.use('/api',album_routes);
  app.use('/api',song_routes);


/*app.get('/pruebas',(req,res)=>{
  res.status(200).send({message:'bienvenido amiguito'})
});*/



  module.exports=app;
