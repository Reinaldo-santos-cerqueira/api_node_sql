const router    =   require('express').Router();
const config      =   require('../db')
const sql = require("mssql");


async function execSQLQuery(sqlQuery,res){
    let connect = await sql.connect(config);
    connect.request()
    .query(sqlQuery)
    .then(result => {
        res.json({message: result.recordset})
    })
    .catch(err => {res.json(err)});
}

router.get('/',async (req, res) => {
    execSQLQuery("select * from teste10",res)
})
router.get('/:id',async (req, res) => {
    if(req.params.id){
        execSQLQuery("select * from teste10 WHERE id = " + parseInt(req.params.id), res);
    }
})
router.delete('/:id',async (req, res) => {
    if(req.params.id){
        execSQLQuery("delete from teste10 WHERE id = " + parseInt(req.params.id) +"select * from teste10", res);
    }
})

router.post('/',async (req, res)=>{
    const id = parseInt(req.body.id);
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    execSQLQuery(`INSERT INTO teste10 (id,nome,cpf) VALUES(${id},'${nome}','${cpf}') select * from teste10`,res);
})
router.put('/:id',(req, res) =>{
    const id = parseInt(req.body.id);
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    execSQLQuery(`UPDATE teste10 SET nome = '${nome}', cpf = '${cpf}' WHERE id = ${id} select * from teste10 WHERE id = ${id}`,res);
})
module.exports = router