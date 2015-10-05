# BreatheHeathrow
Service that restructuring publishing of messages on the server. It reads from Opensensors.io platform messages, parse it and publish to different topics in Opensensors.io
Subscribes to;

* /orgs/BreatheHeathrow/co
* /orgs/BreatheHeathrow/no2
* /orgs/BreatheHeathrow/temperature
* /orgs/BreatheHeathrow/humidity
* /orgs/BreatheHeathrow/noise

Extracts SENSOR-ID from the payload and publishes to;

* /orgs/Breatheheathrow/SENSOR-ID
