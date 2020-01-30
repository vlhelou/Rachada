const Pool = require('pg').Pool
const pool = new Pool({
    host: 'localhost',
    user: 'usrapp',
    password: 'usrapp',
    database: 'rachid',
})

const Grava = (request, response) => {
    const { Id, IdPagante, Nome, DataRealizacao, Valor } = request.body
    console.log(Id && Id > 0)
    if (Id && Id > 0) {
        pool.query(`update despesa set nome=$1, datarealizacao=$2, valor=$3  where id = $4
        returning id, idpagante, nome, datarealizacao, valor`, [ Nome, DataRealizacao, Valor, Id], (error, result) => {
            if (error) {
                console.log('Erro insert', error)
            }
            response.status(200).json(result.rows[0])
        })

    } else {
        pool.query(`insert into despesa (idpagante, nome, datarealizacao, valor) values ($1,$2,$3,$4)
            returning id, idpagante, nome, datarealizacao, valor`, [IdPagante, Nome, DataRealizacao, Valor], (error, result) => {
            if (error) {
                console.log('Erro insert', error)
            }
            response.status(200).json(result.rows[0])
        })

    }
}


module.exports = { Grava }