const Pool = require('pg').Pool
const pool = new Pool({
    host: 'localhost',
    user: 'usrapp',
    password: 'usrapp',
    database: 'rachid',
})

const Grava = (request, response) => {
    const { id, idpagante, nome, datarealizacao, valor } = request.body
    if (id && id > 0) {
        pool.query(`update despesa set nome=$1, datarealizacao=$2, valor=$3  where id = $4
        returning id, idpagante, nome, datarealizacao, valor`, [ nome, datarealizacao, valor, id], (error, result) => {
            if (error) {
                console.log('Erro insert', error)
            }
            response.status(200).json(result.rows[0])
        })

    } else {
        pool.query(`insert into despesa (idpagante, nome, datarealizacao, valor) values ($1,$2,$3,$4)
            returning id, idpagante, nome, datarealizacao, valor`, [idpagante, nome, datarealizacao, valor], (error, result) => {
            if (error) {
                console.log('Erro insert', error)
            }
            response.status(200).json(result.rows[0])
        })

    }
}

const CriaLancamento = (request, response)=>{
    const {iddespesa, idcredor, iddevedor, valor} = request.body
    pool.query(`insert into lancamento (iddespesa, idcredor, iddevedor, valor) values ($1,$2,$3,$4)
    returning id, iddespesa, idcredor, iddevedor, datarealizacao, dataconfirmacaodevedor, valor`, [iddespesa, idcredor, iddevedor, valor], (error, result) => {
    if (error) {
        console.log('Erro insert', error)
    }
    response.status(200).json(result.rows[0])
})

}

module.exports = { Grava, CriaLancamento }