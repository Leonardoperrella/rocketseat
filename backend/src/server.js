const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const app = express(); //cria a app
const server = http.Server(app);
const io = socketio(server);
//re.query = Acessar    

mongoose.connect('mongodb+srv://leonardoperrella:1q2w3e4r5t@cluster0-aaswd.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connectedUsers = {}; 

io.on('connection', socket => {
    //console.log(socket.handshake.query);
    //console.log('Usuario conectado', socket.id);
    
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;


    /*
    //#Server
    socket.on('omni', data => {
        console.log(data);
    })

    #Client
    setTimeout(() => {
        socket.emit('hello', 'World');
    }, 4000);
    */
    
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);



//app.listen(3333); // seleciona porta localhost:3333
//após instalar o socketio e criar o server subistitui app.listen(3333) por server.listem(3333)
server.listen(3333)