const app = require('express')();

const server = require('http').createServer(app);
const io = require('socket.io')(server, { origins: '*:*'});

// define interactions with client
io.sockets.on('connection', function(socket){
  console.log('connected ')
  setInterval(() => socket.emit('stream', {'title': "A new title via Socket.IO!"}), 2000);

  socket.on('disconnect', () => {
    console.log('disconnect')
  })

  socket.on('lol', msg => {
    console.log(msg)
  })
});

const bodyParser = require('body-parser');

const port = process.env.NODE_ENV !== 'production' ? 3000 : undefined;
app.use(bodyParser.json());

const messages = [];

app.get('/', (req, res) => {

  const message = req.query.text;
  console.log('message recu', messages);
  message && messages.push(message)

  res.status(200);
  res.send({
    messages,
  });
})

// new user

server.listen(port);
console.log('Server listening on port', port);

module.exports = server;
