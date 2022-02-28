import express from 'express';


const app = express()
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    res.json({mensagem: "Olá mundo"})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})