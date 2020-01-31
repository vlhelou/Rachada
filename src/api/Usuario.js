const Pool = require('pg').Pool
var crypto = require('crypto')
const pool = new Pool({
    host: 'localhost',
    user: 'usrapp',
    password: 'usrapp',
    database: 'rachid',

})

const Registra = (request, response) => {
    const { nome, email, senha } = request.body
    //console.log(Nome, Email, Senha)
    pool.query('select * from usuario where email = $1', [email], (error, result) => {
        if (error) {
            response.status(500).json({ error: 'erro na consulta' })
        }
        if (result.rowCount == 0) {
            console.log('Entrei no insert')
            const senhaMD5 = crypto.createHash('md5').update(senha).digest("hex");
            pool.query(`insert into usuario (nome, email, senha) values ($1,$2,$3)
                returning id, nome, email, senha`, [nome, email, senhaMD5], (error, result) => {
                if (error) {
                    console.log('Erro insert', error)
                }
                response.status(200).json(result.rows[0])
            })
        } else {
            const linha = result.rows[0]
            if (!linha.nome) {
                pool.query(`update usuario set nome=$1, senha=$2 where id = $3 
                returning id, nome, email, senha`, [nome, senhaMD5, linha.id], (error, result) => {
                    if (error) {
                        console.log('Erro insert', error)
                    }
                    response.status(200).json(result.rows[0])
                })

            }
            response.status(500).json({ error: 'Usuário já existe' })
        }
    })
}

const RegistraVazio = (request, response) => {
    const { email } = request.body
    //console.log(Nome, Email, Senha)
    pool.query('select * from usuario where email = $1', [email], (error, result) => {
        if (error) {
            response.status(500).json({ error: 'erro na consulta' })
        }
        if (result.rowCount == 0) {      
            pool.query(`insert into usuario ( email) values ($1)
                returning id, nome, email, senha`, [email], (error, result) => {
                if (error) {
                    console.log('Erro insert', error)
                }
                response.status(200).json(result.rows[0])
            })
        } else {
            response.status(200).json(result.rows[0])        }
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
        if (senhaMD5 == result.rows[0].senha) {
            response.status(200).json(result.rows[0])
        } else {
            response.status(500).json({ error: 'Falha na autenticação' })
        }


    })
}


module.exports = { Registra, RegistraVazio, Login }
//module.exports = router