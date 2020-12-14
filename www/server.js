const express = require('express')
const bodyParser = require('body-parser')
// const request = require('request')
const app = express()

const http = require('http').Server(app);
const io = require('socket.io')(http);

const mqtt = require('mqtt')
// const HttpsProxyAgent = require('https-proxy-agent')

const mqttServer = 'mqtt://10.0.0.76' //mqtt
const username = '<USERNAME>';
const password = '<PASSWORD>';
const topic = '/home/weather/+'
// const topic = '#'
const client  = mqtt.connect(mqttServer)

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
})

io.on('connection', function(socket) {
  console.log('A new WebSocket connection has been established');
});

var clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

client.subscribe(topic)

client.on('message', function(topic, message) {
  if (topic === '/home/weather/temperature') {
    let msg_temp = new Buffer.from(message).toString()
    io.emit('temperature', msg_temp);
    console.log("temperature: ", msg_temp);
  }
  if (topic === '/home/weather/humidity') {
    let msg_humidity = new Buffer.from(message).toString()
    io.emit('humidity', msg_humidity );
    console.log("humidity: ", msg_humidity );
  }
  if (topic === '/home/weather/time') {
    let msg_time = new Buffer.from(message).toString()
    io.emit('time', msg_time);
    console.log("time: ", msg_time);
  }
});
http.listen(5000,  () => {
  console.log('http://localhost:5000')
})
