FROM node:0.12

RUN npm install mqtt log4js opensensors-log4js-logstash

ADD topic-splitter.js topic-splitter.js

CMD node topic-splitter.js
