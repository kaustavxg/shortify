require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

const urlRouter = require('./routes/url')

const app = express();
app.use(express.json());

app.use('/url', urlRouter)

async function main(){

    mongoose.connect(process.env.MONGO_URL);
    console.log(`mongo url: ${process.env.MONGO_URL}`);

    app.listen(process.env.PORT, () => {
        console.log(`listening on port: ${process.env.PORT}`);
    })
}

main();


