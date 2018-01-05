FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY process.yml ./
COPY server /app

RUN npm install

EXPOSE 3000

CMD ['npm', 'start']
