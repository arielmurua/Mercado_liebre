const express = require('express')
const path = require('path')
const app = express();

app.use('/static', express.static(path.resolve(__dirname, './public')));
app.use('/images', express.static(path.resolve(__dirname, './public/images')));
app.use('/css', express.static(path.resolve(__dirname, './public/css')));


app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});
app.get('/register', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
});
app.get('/login', (req, res) =>{
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
});

app.listen(3000, () => {
    console.log("Server up");
});