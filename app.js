const express = require('express');
const aplicacion = express();
const bodyParse = require('body-parser');
const mongo = require('mongodb');


aplicacion.use(bodyParse.json());
aplicacion.use(bodyParse.urlencoded({ extended: true }));

let pool = mongo.cr


aplicacion.get('/', (req, res) => {
    res.send(`hola mundo NODEJS`);
});




aplicacion.listen(8080, () => {
    console.log(`Iniciando el servico`);
})