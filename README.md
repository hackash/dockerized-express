# Dockerized expressJS

> Sample of express application running in docker container using pm2

## To run locally

1. Add local configuration file under ```server/src/node_modules/config```
2. Create docker image ``` docker build -t [imagename:tag] . ```
3. Run container ``` docker run -p 3000:3000 -t -d -i [imagename:tag] /bin/bash``` 

## To ship the container 

1. Adjust prod.json file to fit your needs 
2. Create docker image ``` docker build -t [imagename:tag] . ```
3. Login to your docker hub account ```docker login```
4. Push the container using ```docker push ```
5. Run it wherever you want  

### License
```
Copyright (C) 2015-2018 by Ashot Harutyunyan <ashot.todo@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

```