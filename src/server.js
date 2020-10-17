// colocando todo o express em uma constante 
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv/config');
const cors = require('cors');
const path = require('path');
const http = require('http');
const app = express();
const server = http.Server(app);






// conectar a base de dados mongoDB
mongoose.connect(process.env.ConexaoMongo, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})

 // express entendendo json
 app.use(cors());
 app.use(express.json());
 app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
 app.use(routes);
 
 
 app.post('/users/', (req, res) => {
    // req.body = acessar corpo da requisicao / criação e edicao de registros
    return res.json(req.body); 
 });

// minha aplicaçao escuta nessa porta
server.listen(3333);


