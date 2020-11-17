const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const Usuarios = require('./models/usuarios');

const aplicacion = express();

aplicacion.use(bodyParse.json());
aplicacion.use(bodyParse.urlencoded({ extended: true }));
aplicacion.set('view engine', 'ejs')

/**********************************************************
    Configuracion 
**********************************************************/
aplicacion.set('port', process.env.PORT || 8080)
    /*  1)  Realizamos la conexion con  la base da datos  */
mongoose.connect('mongodb://localhost:27017/tiendacrud', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log(`Conecion exitosa MongoDB`))
    .catch(err => console.log(err));



/**********************************************************
Listar todos los usuarios
**********************************************************/
aplicacion.get('/', async(req, res) => {
    /* const Cat = mongoose.model('Cat', { name: String, apellido: String, edad: Number, direccion: String });
    const kitty = new Cat({ name: 'Andrea', apellido: 'Lopez Rodriguez', edad: 24, direccion: 'Kr 11 este 45 - 24' });
    kitty.save().then(() => console.log('meow')); */


    const lisUsuarios = await Usuarios.find();
    /* if (lisUsuarios.length > 0) {
        res.json({ data: lisUsuarios });
    } else {
        res.json({ errors: ["No se encontro Informacion"] });
        res.status(404);
    } */
    res.render('paginas/index', { usuarios: lisUsuarios });

});

/**********************************************************
    Registrar un Usuario
**********************************************************/
aplicacion.get('/nuevousuario', async(req, res) => {
    /*  */
    /* try {

        const usuario = new Usuarios(req.body);
        await usuario.save();

        res.status(201);
    } catch {
        res.json({ errors: ["Error, No se pudo registrar"] });
        res.status(404);
    } */

    /* console.log(`Datos a insertar \n ${req.body.nombre}`) */
    res.render('paginas/nuevoUser');

});

aplicacion.post('/procesarRegistro', async(req, res) => {

    const usuario = new Usuarios(req.body);
    await usuario.save();

    console.log(`Datos a insertar \n ${req.body}`)
    res.redirect('/');

});




/*********************************************************
    Actualizar un usuario
**********************************************************/
aplicacion.put('/editarusuario:id', (req, res) => {

});


/*********************************************************
    Eliminar un usuario
*********************************************************/
aplicacion.get('/usuario:numeroId', (req, res) => {
    const idx = req.params.numeroId;
    console.log(`Usuario a eliminar ${idx}`);
    res.send(`Usuario a eliminar ${req.params.numeroId}`);
});




/*********************************************************
    lenvantar servicio NODEJS en el puerto 8080
**********************************************************/
aplicacion.listen(aplicacion.get('port'), () => {
    console.log(`Iniciando el servico `);
})