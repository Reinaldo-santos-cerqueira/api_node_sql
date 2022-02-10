//configuração inicial do servidor
//Iniciar o servidor express
const express = require('express');

//Configurações de conexão com o sql
const config = require("./src/db")
//associar o app ao express 
const app = express();
//configurando o body parser
const bodyParser = require('body-parser');
//mssql
const sql = require('mssql');
//definir a port
const port = 3000;
//rota inicial de teste
const inicialRouter = require('./src/routes/inicial.routes')
//rota de clientes
const clientesRouter = require('./src/routes/clientes.routes')

sql.connect(config)
.then(conn =>{return global.conn = conn;})
.catch(err =>{console.log(err)})

//configurando o body parser
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());



//usando a rota inicial
app.use('/',inicialRouter);
//usando rota de clientes
app.use('/Clientes',clientesRouter);

//ouvindo a porta
app.listen(port);

//testando se funcionou
console.log('API funcionando!');