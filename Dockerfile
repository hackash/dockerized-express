FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY process.yml ./
COPY server /app

RUN npm install

RUN npm install pm2 -g

EXPOSE 3000

CMD ['npm', 'start']
