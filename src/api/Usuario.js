const Pool = require('pg').Pool
var crypto = require('crypto')
const pool = new Pool({
    host: 'localhost',
    user: 'usrapp',
    password: 'usrapp',
    database: 'rachid',

})

const Registra = (request, response) => {
    const { Nome, Email, Senha } = request.body
    //console.log(Nome, Email, Senha)
    pool.query('select * from usuario where email = $1', [Email], (error, result) => {
        if (error) {
            response.status(500).json({ error: 'erro na consulta' })
        }
        console.log(result.rowCount)
        if (result.rowCount == 0) {
            console.log('Entrei no insert')
            const senhaMD5 = crypto.createHash('md5').update(Senha).digest("hex");
            pool.query(`insert into usuario (nome, email, senha) values ($1,$2,$3)
                returning id, nome, email, senha`, [Nome, Email, senhaMD5], (error, result) => {
                if (error) {
                    console.log('Erro insert', error)
                }
                response.status(200).json(result.rows[0])
            })
        } else {
            response.status(500).json({ error: 'Usuário já existe' })
        }
    })
}

const Login = (request, response) => {
    const { Email, Senha } = request.body
    pool.query('select * from usuario where email = $1', [Email], (error, result) => {
        if (error) {
            response.status(500).json({ error: 'erro na consulta' })
        }
        if (result.rowCount != 1) {
            response.status(500).json({ error: 'usuario não localizado' })
        }
        const senhaMD5 = crypto.createHash('md5').update(Senha).digest("hex");
        console.log(senhaMD5, '==========', result.rows[0].senha)
        if (senhaMD5 == result.rows[0].senha) {
            response.status(200).json(result.rows[0])
        } else {
            response.status(500).json({ error: 'Falha na autenticação' })
        }


    })
}


module.exports = { Registra, Login }
//module.exports = router