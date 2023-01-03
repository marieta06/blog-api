const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/db/conection');
const config = require('./src/config/config');
const routes = require('./routes/index');

const app = express();
const PORT = config.PORT;

app.use(bodyParser.json());

//BASE URL
app.use('/api/v1/', routes);

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server listening on port: ${PORT}`);
        });
        await sequelize.authenticate();
        // app.get('/',(async (req,res)=>{
        //     await User.create({
        //         fistName: req.body.firstName,
        //
        //     })
        // }));
        console.log('Database successfully connected');
    } catch (error) {
        console.log('Unable to connect to the database ', error.message);
    }
};
start();