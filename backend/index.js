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