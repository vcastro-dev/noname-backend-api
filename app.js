import express from 'express';
import cors from 'cors'

import usersController from './controllers/users.js'

const app = express()
const port = process.env.PORT || 8080;

// setting cors
app.use(cors())

// setting body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.json({mensagem: "Olá mundo"})
})

app.get('/users', function(req, res) {
    usersController.readUser(data => res.json(data))
})

app.post('/users/create', function(req, res) {
    usersController.createUser(req.body.email, eq.body.password, data=>res.redirect('back'))
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
})