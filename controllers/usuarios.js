const { request } = require('express')
const { response } = require('express')


const usuariosGet = (req, res = response) => {

    const { apikey } = req.query;


    res.json({
        msg: 'get API - controlador',
        apikey
    })
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;


    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    })
}
const usuariosPut = (req, res = response) => {

    const id = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    })
}
const usuariosDelete = (req, res = response) => {


    res.json({
        msg: 'delete API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPut
}