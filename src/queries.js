const Pool = require('pg').Pool
const pool = new Pool({
  user: 'arthur',
  host: 'localhost',
  database: 'pmi',
  password: '1234',
  schema: 'pmi',
  port: 5432,
})



const getUsers = (request,response) =>{
    pool.query('select * from usuarios.cadastro order by id asc',(error,result)=>{
        if(error){
            console.log('erro ao selecionar lista de usuarios. Classe queries.js')
            throw error
        }
        response.status(200).json(result.rows)
    })
}   

const getUserByID = (request,response) =>{
    //define parametro que vai ser passado pra clausula where
    const id = parseInt(request.params.id)
    //padrao de querry que recebe argumentos da busca
    pool.query('select * from usuarios.cadastro where id = $1',[id],(error,result)=>{
        if(error){
            console.log('erro ao selecionar lista de usuarios. Classe queries.js')
            throw error
        }
        response.status(200).json(result.rows)
})
}

module.exports = {getUsers,getUserByID}