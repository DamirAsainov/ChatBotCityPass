require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const gisAPI = require('./2gisAPI')
// const User = require('./models/User')





const app =  express();


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/',  async (req, res) => {
    gisAPI.makeRouting()
    try{
        res.render('index');
    }catch (e){
        console.log(e)
        res.send(e);
    }
});
app.get('/map',(req, res) =>{
    res.render('map')
})

const PORT = process.env.PORT || 3000;
async function start(){
    // await mongoose.connect(process.env.DB_CONN)
    app.listen(PORT, () => {
        console.log(`Server started: http://localhost:${PORT}`)
    });
}
start();

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = app;
module.exports.start = start;



