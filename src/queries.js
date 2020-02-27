const pool = require('./dbConection')

//---------------------- Consulta com um parametro -----------------------

//lista todos os usuarios
const getUsers = (request,response) =>{
    pool.query('select * from usuarios.cadastro order by id asc',(error,result)=>{
        if(error){
            console.log('erro ao selecionar lista de usuarios. Classe queries.js')
            throw error
        }
        response.status(200).json(result.rows)
    })
}   

//busta usuario por id
const getUserByID = (request,response) =>{
    //define parametro que vai ser passado pra clausula where
    const {id} = request.body
    //padrao de querry que recebe argumentos da busca
    pool.query('select * from usuarios.cadastro where id = $1',[id],(error,result)=>{
        if(error){
            console.log('erro ao selecionar lista de usuarios. Classe queries.js')
            throw error
        }
        response.status(200).json(result.rows)
})
}

//busca usuario pelo nome
const getUserByName = (request,response) =>{
    //define parametro que vai ser passado pra clausula where
    const {usuario} = request.body
    //padrao de querry que recebe argumentos da busca
    pool.query('select * from usuarios.cadastro where usuario = $1',[usuario],(error,result)=>{
        if(error){
            console.log('erro ao selecionar lista de usuarios. Classe queries.js')
            throw error
        }
        response.status(200).json(result.rows)
})
}

//---------------------- Consulta com mais de um parametro -----------------------

const getUserByNameAndEmail = (request,response) =>{
    //define parametro que vai ser passado pra clausula where
    const {usuario, email} = request.body
    //padrao de querry que recebe argumentos da busca
    pool.query('select * from usuarios.cadastro where usuario = $1 and email = $2',[usuario,email],(error,result)=>{
        if(error){
            console.log('erro ao selecionar lista de usuarios. Classe queries.js')
            throw error
        }
        response.status(200).json(result.rows)
})
}


//----------------------------- Cadastro Usuario -------------------

const cadastroUsuario = (request,response) =>{
    //define parametro que vai ser passado pra clausula where
    
    const {usuario, senha, email} = request.body
    
    //padrao de querry que recebe argumentos da busca
    pool.query('insert into usuario.cadastro (usuario,senha,email) values ($1,$2,$3)',[usuario,senha,email],(error,result)=>{
        if(error){
            console.log('erro ao selecionar lista de usuarios. Classe queries.js')
            throw error
        }
        response.status(200).json(result.rows)
        console.log("usuario cadastrado!")
})
}


module.exports = {getUsers,getUserByID,getUserByName,getUserByNameAndEmail,cadastroUsuario}