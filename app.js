const exp = require("constants");
const express = require("express");
const bodyParser= require('body-parser');
const fs=require("fs");
const app = express();
const port =80;
const path = require('path');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/css',express.static(__dirname + '/public/css'));
app.use('/js',express.static(__dirname + '/public/js'));
app.use('/img',express.static(__dirname + '/public/img'));

app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
res.render("gym-responsive-website");
});
app.get('/about',(req,res)=>{
    res.render("about-us-page");
    });
    app.get('/BMI',(req,res)=>{
        res.render("fitness-cal-page");
        });
        app.get('/packs',(req,res)=>{
            res.render("packs");
            });

    app.post('/',(req,res)=>{
       Name =req.body.Name
        age = req.body.age
        gender = req.body.gender
        location=req.body.location
        email=req.body.email
        phone=req.body.phone
        let outputWrite = `Name: ${Name} ,gender: ${gender}, age: ${age}, location: ${location}, email:${email},phone No:${phone}`

        
        fs.writeFileSync('output.txt',outputWrite);
        const params ={'message' : 'form successfully submitted'};
        res.status(200).render('gym-responsive-website', params);

    });
app.listen(port,function(){
console.log("server started");
});