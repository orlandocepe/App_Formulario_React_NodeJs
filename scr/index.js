const express=require('express');
const { mongoose } = require('./db/db');
const morgan =require('morgan');
const path = require('path');

const app= express();

app.use(morgan('dev'))

app.use(express.json());

app.use('/api/tasks',require('./routes/rutas'))

app.use(express.static(path.join(__dirname,'public')));

app.listen(8080,()=>{
    console.log("escuchando en el puerto",8080);
});