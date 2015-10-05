FROM node:0.12

RUN npm install mqtt log4js opensensors-log4js-logstash

ADD wicked-device.js wicked-device.js

CMD node wicked-device.js
