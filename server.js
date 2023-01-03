const express = require('express');
const connection = require('./src/db/conection');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!!!');
});

async function start() {
    try {
        app.listen(3000, 'localhost', () => {
            console.log(`APP LISTENING ON 3000`);
        });
        await connection.authenticate();
        console.log('Database successfully connected!!!');
    } catch (e) {
        console.log('Unable to connect to the database ', e.message);
    }
}

start();