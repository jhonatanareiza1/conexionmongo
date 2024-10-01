//importaciones

import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';

//creacion del servidor

const app = express();
const __dirname = dirname (fileURLToPath(import.meta.url));

// consulta basica
app.get('/',(req,res) => res.sendFile(__dirname +'/view/index.html'))
app.get('/register',(req,res) => res.sendFile(__dirname +'/view/register.html'))
app.get('/inicio',(req,res) => res.sendFile(__dirname +'/view/inicio.html'))
app.get('/index',(req,res) => res.sendFile(__dirname +'/view/index.html'))

//ruta localhost para la conexion al servidor
app.listen(4000)
//imprime en consola
console.log("el servidor esta en el puerto", 4000)

//configuacion para imagenes y estilos

app.use(express.static('public'));