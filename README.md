# Dockerized expressJS

> Sample of express application running in docker container using pm2

## To run the container locally

1. Add local configuration file ```[dev.json]``` under ```server/src/node_modules/config```
2. Create docker image ``` docker build -t [imagename:tag] . ```
3. Run container ``` docker run -p 9000:3000 -d [imagename:tag] ```
4. Test it using this command curl ```localhost:9000``` 

## To ship the container 

1. Adjust prod.json file to fit your needs 
2. Create docker image ``` docker build -t [imagename:tag] . ```
3. Login to your docker hub account ```docker login```
4. Push the container using ```docker push ```
5. Run it wherever you want  
