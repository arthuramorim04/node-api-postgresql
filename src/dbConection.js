const Pool = require('pg').Pool

const pool = new Pool({
  user: 'arthur',
  host: 'localhost',
  database: 'pmi',
  password: '1234',
  schema: 'pmi',
  port: 5432,
})

module.exports = pool