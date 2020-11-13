const express = require('express');
const aplicacion = express();
const bodyParse = require('body-parser');
const mongoose = require('mongoose');


aplicacion.use(bodyParse.json());
aplicacion.use(bodyParse.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/tiendacrud', { useNewUrlParser: true, useUnifiedTopology: true });


aplicacion.get('/', (req, res) => {
    const Cat = mongoose.model('Cat', { name: String, apellido: String });
    const kitty = new Cat({ name: 'Mario Ardilla', apellido: 'Rosales Gomez' });
    kitty.save().then(() => console.log('meow'));
    res.send(`hola mundo NODEJS`);
});




aplicacion.listen(8080, () => {
    console.log(`Iniciando el servico`);
})