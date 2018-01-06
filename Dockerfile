FROM node:carbon

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
COPY process.json ./
COPY server /app

RUN npm install pm2 -g
RUN npm install

EXPOSE 3000

CMD pm2-runtime process.json
