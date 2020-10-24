const express = require('express');
const routes = express.Router();

//3. Rotas
routes.get('/', (req, res) => {
    //6.1 inserção com chamada ao contexto /
    // Product.create({
    //     title: 'React Native',
    //     description: 'Build native apps with React',
    //     url: 'http://github.com/facebook/react-native'
    // });
    res.send('Hello Trevis');
});

module.exports = routes;