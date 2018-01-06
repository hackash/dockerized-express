# Dockerized expressJS

> Sample of express application running in docker container using pm2

## To run the container locally

1. Install yarn package manager
2. Install app packages ```yarn install```
3. Add local configuration file ```[dev.json]``` under ```server/src/node_modules/config```
4. Create docker image ``` docker build -t [imagename:tag] . ```
5. Run container ``` docker run -p 9000:3000 -d [imagename:tag] ```
6. Test it using this command curl ```localhost:9000``` 

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

MIT. Copyright (c) 2016-1028 <a href="https://github.com/hackash"> Ashot Harutyunyan </a>

