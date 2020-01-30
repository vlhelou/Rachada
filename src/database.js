const {Pool}=require('pg')


const pool = new Pool({
    host: 'localhost',
    user: 'usrapp',
    password: 'usrapp',
    database: 'rachid',

})
pool.connect()

// const database = new Client({
//     host: 'localhost',
//     user: 'usrapp',
//     password: 'usrapp',
//     database: 'rachid',
// });

// database.connect()

// database.query('SELECT NOW()', (err, res) => {
//     console.log(err, res)
//   })
// const pool = new Pool();

// const client = new Client(cs)
//console.log('ponto');
module.exports = {pool}