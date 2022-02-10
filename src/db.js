//Configurações de conexão com o sql
const sql = require('mssql')
const config = {
    server: "192.168.102.195",
    user: "sa",
    password: "sgn123",
    database: "TESTE_REINALDO",
    synchronize: true,
    trustServerCertificate: true,
}

module.exports =  config;
