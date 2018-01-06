FROM keymetrics/pm2:latest-alpine

WORKDIR /app

ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_ENV=production

COPY package*.json ./
COPY process.json ./
COPY server /app

RUN npm install
RUN pm2 install pm2-server-monit

EXPOSE 3000

CMD pm2-runtime process.json
