import express from 'express';
import cors from 'cors'


const app = express()
const port = process.env.PORT || 3000;
app.use(cors())

app.get('/', function(req, res) {
    res.json({mensagem: "Olá mundo"})
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})