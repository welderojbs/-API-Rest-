import mysql from 'promise-mysql';

import factory from './sessionFactory';
import { connect } from 'http2';

const pool =  mysql.createPool(factory.database);

//modulo de conexão para consultar
pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection); 
        console.log('DB está Online')
    });

    export default pool;