require('dotenv').config();

const express=require('express')
const path = require('path')
const app= express()


app.listen(process.env.PORT || 3031 ,()=>console.log('Server running in port http://localhost:'+ process.env.PORT))


app.use(express.static('public'))

app.get("/", (req, res)=>res.sendFile(path.join(__dirname,'views', 'homes.html' )))

app.get("/homes", (req, res)=>res.sendFile(path.join(__dirname,'views', 'homes.html' )))

app.get("/register", (req,res)=>res.sendFile(path.join(__dirname, 'views', 'register.html')))


app.get("/login", (req,res)=>res.sendFile(path.join(__dirname, 'views', 'login.html'))) 

app.get("/profile", (req,res)=>res.sendFile(path.join(__dirname, 'views', 'profile.html'))) 





