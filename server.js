const express = require('express');
const mongoose = require('mongoose');
const requireDir = require(`require-dir`);

//1. Inicia App
const app = express();
app.use(express.json());

//4. Inicia DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

//5. Garante uso dos Models
//require('./src/models/Product');
requireDir('./src/models');

//6. confirmando condições para trabalhar com o BD
//const Product = mongoose.model('Product');

//rota exportada para routes.js
app.use('/api', require('./src/routes')); //com prefixo 'api'

//2. Listening
app.listen(3001);