const express = require("express");
const app = express();

const port = 5000;

app.get("/",(req,res)=>{
    res.status(200).send("ANA SAYFA");
})
app.get('/about', (req, res) => {
    res.status(200).send('HAKKIMIZDA SAYFASI')
})

app.get('/contact', (req, res) => {
    res.status(200).send('ILETISIM SAYFASI')
})

app.get('*', (req, res) => {
    res.status(404).send('404 SAYFA BULUNAMADI')
})

app.listen(port,()=> {
    console.log(`Sunucu ${port}. portta çalışmaya başladı...`)
});