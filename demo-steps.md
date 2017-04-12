# Demo

This demo is meant to be run using the code from the 'master' branch. At some point, I may decide to use other branches to demonstrate different stages in the code. For now, however, everything here is what you get. 

## `hello-world-nodejs`

* Demonstrates an extremely basic image build:
```
docker build . -t hello-world-nodejs
```
* Show what images are on the system:
```
docker images
```
* Try running your image. Note that running the image in docker is actually extremely quick.
```
docker run hello-world-nodejs
```
* Try un-commenting the additional `RUN` call after `npm install`. Notice that all the steps through `npm install` are cached and reused, assuming you built the image beforehand.
```
docker build . -t hello-world-nodejs
```

## `simple-site-nodejs`
