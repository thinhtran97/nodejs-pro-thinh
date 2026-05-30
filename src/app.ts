// const express = require('express');
import express from 'express';
import 'dotenv/config';
import webRoutes from './routes/web';
import { config } from 'process';
import { get } from 'http';
import getConnection from './config/database';

const app = express();
const port = process.env.PORT || 8080;

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configure static files: css, js, images
app.use(express.static('public'));

// config routes
webRoutes(app);

getConnection();

app.listen(port, () => {
    console.log(`Server is running at 1232121 http://localhost:${port}`);
    console.log('env port ', process.env.PORT);
    console.log(__dirname + '/views');
});