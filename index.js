require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const gisAPI = require('./2gisAPI')
// const User = require('./models/User')





const app =  express();


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/',  (req, res) => {
    gisAPI.makeRouting()
    res.render('index');
});
app.get('/weather/:city', async (req, res) =>{
    const city = req.params.city;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.WEATHER_API_KEY}`
    try{
        const response = await axios.get(url);
        res.send(response.data);
    }catch (e){
        console.log(e)
        res.send(e);
    }
})
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

module.exports = app;
module.exports.start = start;



