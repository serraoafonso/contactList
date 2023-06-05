const express = require('express');
const router = express.Router();
const {getContact, createContact, updateContact, getOneContact, deleteContact} = require('../controllers/contactController')//ta a tirar ja a funcao diretamente

router.get('/',getContact)
router.get('/:id',getOneContact)
router.post('/', createContact)
router.put('/:id', updateContact)
router.delete('/:id',deleteContact)
/*
router.put('/:id',(req, res)=>{
    res.status(200).json({message: 'Update contact for  contact'})//O Express.js usa os dois pontos para definir partes da rota que podem variar e capturar esses valores como parâmetros na propriedade req.params, por isso o id está depois dos dois pontos.Quando uma requisição DELETE é feita para essa rota, o Express.js analisa a URL da requisição e captura o valor correspondente à parte variável após o :. Esse valor é então acessível por meio de req.params.id, onde id é o nome do parâmetro definido na rota.
})*/


module.exports = router

