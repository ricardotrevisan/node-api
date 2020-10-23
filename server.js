const express = require('express');
const mongoose = require('mongoose');
const requireDir = require(`require-dir`);

//1. Inicia App
const app = express();

//4. Inicia DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});

//5. Garante uso dos Models
//require('./src/models/Product');
requireDir('./src/models');

//6. confirmando condições para trabalhar com o BD
const Product = mongoose.model('Product');

//3. Rotas
app.get('/', (req, res) => {
    //6.1 inserção com chamada ao contexto /
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });
    res.send('Hello Trevis');
});

//2. Listening
app.listen(3001);