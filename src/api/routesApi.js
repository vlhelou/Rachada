const express = require('express');
const router = express.Router();
const usuario = require('./Usuario')
const despesa = require('./Despesa')

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', function (req, res) {
    pool.query('select now()', (erro, data)=>{
        if (erro){
            console.log('deu erro')
        }
        console.log('deu certo')
        
        //res.send(data);    
        res.status(200).json(data)
    })
    
});


router.post('/usuario/registra', usuario.Registra)
router.post('/usuario/registravazio', usuario.RegistraVazio)
router.post('/usuario/login', usuario.Login)

router.post('/despesa/grava', despesa.Grava)
router.post('/despesa/crialancamento', despesa.CriaLancamento)

// define the about route
router.get('/about', function (req, res) {
    res.send('About birds');
});

module.exports = router