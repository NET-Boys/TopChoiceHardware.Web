const express = require('express');
const app = express();
const path = require('path');
const port = 3001
const router = express.Router();


router.get('/', (req,res) => res.sendFile(path.join(__dirname+'/public/view/index.html')));
app.use(express.static(path.join(__dirname, '/public/')));
router.get('/login', (req,res) => res.sendFile(path.join(__dirname+'/public/view/login.html')));
router.get('/ordenDeCompra', (req,res) => res.sendFile(path.join(__dirname+'/public/view/ordenDeCompra.html')));
router.get('/producto', (req,res) => res.sendFile(path.join(__dirname+'/public/view/producto.html')));
router.get('/registro', (req,res) => res.sendFile(path.join(__dirname+'/public/view/registro.html')));
//add the router
app.use('/', router);
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))