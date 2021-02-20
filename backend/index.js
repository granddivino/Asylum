//Express framework for routing
import express from 'express';
//Enables sending of POST requests
import bodyParser from 'body-parser';
//Creates model for POSTs
import mongoose from 'mongoose';
//Enables cross origin requests
import cors from 'cors';

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())

//Declaring connection URL with cluster made on MongoDB
const CONNECTION_URL = 'mongodb+srv://Rainbow:Rainbow123@backend.w0rqf.mongodb.net/<dbname>?retryWrites=true&w=majority'
//Port that app will be running on
const PORT = process.env.PORT|| 8000;
//Connection to Mongoose
mongoose.connect(
    CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(
        PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)
    ))
    .catch((error) => console.log(`${error} did not connect`))