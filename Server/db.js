var pg = require('pg');

const Pool = require('pg').Pool;

const pool = new Pool({
    user: "morse",
    database: "postgres",
    host: 'database-0.cp6jmqeyualr.ap-southeast-1.rds.amazonaws.com',
    password: "aspiration__",
    port: "5432",
});

module.exports = pool;

