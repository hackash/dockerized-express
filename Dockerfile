FROM node:latest

WORKDIR /server

COPY package*.json ./

RUN npm install

CMD ['npm', 'start']
