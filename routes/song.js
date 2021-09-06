'use strict'
var express= require('express');
var Songcontroller=require('../controllers/song');
var api=express.Router();
var md_auth=require('../middlewares/authenticated');

var multipart = require('connect-multiparty');
var md_upload=multipart({uploadDir:'./uploads/songs'});

api.get('/song/:id',md_auth.ensureAuth,Songcontroller.getSong);
api.get('/songs/:album?',md_auth.ensureAuth,Songcontroller.getSongs);
api.post('/song',md_auth.ensureAuth,Songcontroller.saveSong);
api.put('/song/:id',md_auth.ensureAuth,Songcontroller.updateSong);
api.delete('/song/:id',md_auth.ensureAuth,Songcontroller.deleteSong);
api.post('/upload-file-song/:id',[md_auth.ensureAuth,md_upload],Songcontroller.uploadFile);
api.get('/get-song-file/:songFile',Songcontroller.getSongFile);

module.exports=api;
