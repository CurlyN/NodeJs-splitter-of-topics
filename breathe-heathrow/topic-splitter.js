var log4js = require('log4js');
var logstash = require('opensensors-log4js-logstash');
log4js.configure({
  appenders: [
    { type: 'console'},
    { type: 'file',
      filename: 'logs/breathe-heathrow.log'},
    { type: 'opensensors-log4js-logstash',
      host: 'logstash.prod.opensensors.co.uk',
      port: 4560,
      fields: {
        service: 'breatheheathrow'
      }
    }
  ]});

var log = log4js.getLogger('breathe-heathrow');
var mqtt  = require('mqtt');

var broker = ('http://opensensors.io');
var port = 1883;
var clientId = '20630004';

var topic_read = ["/orgs/BreatheHeathrow/co",
                  "/orgs/BreatheHeathrow/no2",
                  "/orgs/BreatheHeathrow/temperature",
                  "/orgs/BreatheHeathrow/humidity",
                  "/orgs/BreatheHeathrow/noise"];

log.info('connecting to mqtt broker with client-id ' + clientId + ' ...');

var client = mqtt.connect(broker,{
  clientId: clientId,
  username: "natalyosk",
  password: "easy1234"
});

client.on('connect', function () {
  log.info('Connected, subscribing to ' + topic_read);
  client.subscribe(topic_read);
});

client.on('close', function () {
  log.info('Connection closed');
});

client.on('reconnect', function () {
  log.info('Reconnecting');
});

//When there is a message on the server, parse the payload,
//and depending on the id of the sensor publish in the right topic

client.on('message', function (topic_read, message, packet) {
  var msg = message.toString().split('"');
  //taking the client id of the sensor
  var sensorID = msg[3];
  //taking the topic of subscribed message
  var topic_of_message = packet.topic.split('/');
  //creating message. Add topic name and read message
  var msg_pub = "topic: "+ topic_of_message[3].toUpperCase() + " values:" + message;

  //publish to the topic which has the same name as the sensor's id
  var topic_pub = "/orgs/BreatheHeathrow/"+sensorID;

  log.info('Publishing to ' + topic_pub + ' [' + msg_pub + ' ]');
  client.publish(topic_pub, msg_pub);
});
