'use strict'
var express= require('express');
var Albumcontroller=require('../controllers/album');
var api=express.Router();
var md_auth=require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload=multipart({uploadDir:'./uploads/albums'});

api.get('/album/:id',md_auth.ensureAuth,Albumcontroller.getAlbum);
api.post('/album',md_auth.ensureAuth,Albumcontroller.saveAlbum);
api.get('/albums/:artist?',md_auth.ensureAuth,Albumcontroller.getAlbums);
api.put('/album/:id',md_auth.ensureAuth,Albumcontroller.updateAlbum);
api.delete('/album/:id',md_auth.ensureAuth,Albumcontroller.deleteAlbum);
api.post('/upload-image-album/:id',[md_auth.ensureAuth,md_upload],Albumcontroller.uploadImage);
api.get('/get-image-album/:imageFile',Albumcontroller.getImageFile);
module.exports=api;
