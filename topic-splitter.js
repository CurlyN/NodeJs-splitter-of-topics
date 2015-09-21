var mqtt  = require('mqtt');

var broker = ('http://opensensors.io');
var port = 1883;
var clientId = 'egg0080217eba180150';

var topic_read = ["/orgs/wd/aqe/co",
                  "/orgs/wd/aqe/no2",
                  "/orgs/wd/aqe/temperature",
                  "/orgs/wd/aqe/humidity",
                  "/orgs/wd/aqe/o3",
                  "/orgs/wd/aqe/heartbeat",
                  "/orgs/wd/aqe/so2"];

var client = mqtt.connect(broker,{
  clientId: clientId,
  username: "natalyosk",
  password: "lyqKtYGl"
});

client.on('connect', function () {
  
  client.subscribe(topic_read);
});


//When there is a message on the server, parse the payload,
//and depending on the id of the sensor publish in the right topic

client.on('message', function (topic_read, message, packet) {
   var msg = message.toString().split('"');
  //taking the client id of the sensor
  var sensorID = msg[3];
  //taking the topic of subscribed message
  var topic_of_message = packet.topic.split('/');
  //publish to the topic which has the same name as the sensor's id
  var topic_pub = "/orgs/wd/aqe/"+topic_of_message[4]+"/"+sensorID;

  client.publish(topic_pub, message);

});


