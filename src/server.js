// codigo aula1
// colocando todo o express em uma constante 
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors');
const path = require('path');
const socketio = require('socket.io');

const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketio(server);


// mongodb+srv://<username>:<password>@tatilonmongo-bn7jg.mongodb.net/test?retryWrites=true&w=majority
// conectar a base de dados mongoDB
mongoose.connect('mongodb+srv://level_up:743167@tatilonmongo-bn7jg.mongodb.net/TopFilmes?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
// define minha rota principal -req requisicao do cliente e res reposta da requisicao
// com isso o app nao ficara processando uma requisicao eternamente 
// GET => buscar / POST => inserir / PUT => modificar / DELETE => excluir (principais comando rest)


/* app.get('/', (req, res) => {
   // return res.send('Hello World'); massa demais 
   return res.json({ message: "Hello Word Tempo Real"} ); 
}); */

/* app.post('/users', (req, res) => {
    // return res.send('Hello World'); massa demais 
    return res.json({ message: "Hello Word Tempo Real - usuarios add"} ); 
 }); */

 // req.query = acessar o query paraments / para filtros
 /* app.get('/users', (req, res) => {
    // return res.send('Hello World'); massa demais 
    return res.json({ message: req.query.idade} ); 
 }); */

// req.params = acessar route params (para edicao e delete)
/*  app.put('/users/:id', (req, res) => {
    // return res.send('Hello World'); massa demais 
    return res.json({ id: req.params.id} ); 
 });
 */

// //=============================== socket vinculado id de usuario com id da conexao socket 
// const connectedUsers = {

// };

// io.on('connection', socket => {
//    // console.log(socket.handshake.query);
//    // console.log('Usuário conectado', socket.id);   

//    const { user_id } = socket.handshake.query;

//    connectedUsers[user_id] = socket.id;
//    // emite uma resposta para o socke.on 
//    //socket.emit('hello', 'World');
// });

// aplicando uma modificação em todas as rotas e seguindo o fluxo normal / interessante * entende melhor isso aqui viu 
// app.use((req, res, next) => {
//      req.io = io;
//      req.connectedUsers = connectedUsers;
//      return next();
// })









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


