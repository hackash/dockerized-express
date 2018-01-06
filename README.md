# Dockerized expressJS

> Sample of express application running in docker container using pm2

## To run the container locally

1. Install app packages ```npm install```
2. Add local configuration file ```[dev.json]``` under ```server/src/node_modules/config```
3. Create docker image ``` docker build -t [imagename:tag] . ```
4. Run container ``` docker run -p 9000:3000 -d [imagename:tag] ```
5. Test it using this command curl ```localhost:9000``` 

## To ship the container 

1. Adjust ```prod.json``` file to fit your needs 
2. Create docker image ``` docker build -t [imagename:tag] . ```
3. Login to your docker hub account ```docker login```
4. Push the container using ```docker push ```
5. Run it wherever you want


## Features  
1. Load balancing using PM2
   > Change instances count in ```process.json``` 
2. Real time monitoring with KEYMETRICS  <br>
   > ``` docker run -e KEYMETRICS_PUBLIC=XXXX -e KEYMETRICS_SECRET=YYYY -p 9000:3000 -d [imagename:tag] ```
## License

MIT. Copyright (c) 2015-1028 <a href="https://github.com/hackash"> Ashot Harutyunyan </a>

