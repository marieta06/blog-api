const express = require('express');
const config = require('./src/configs/config');
const connection = require('./src/db/conection');

const app = express();

app.get('/',(req,res) => {
    res.send('Hello world!!!')
})

async function start(){
    try{
        app.listen(config.PORT,config.HOST,()=>{
            console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`)
        })
        await connection.authenticate()
        console.log('Database successfully connected!!!');
    } catch(e){
        console.log('Unable to connect to the database ',e.message);
    }
}
start()