# Demo

This demo is meant to be run using the code from the 'master' branch. At some point, I may decide to use other branches to demonstrate different stages in the code. For now, however, everything here is what you get. 

## 1 - `hello-world-nodejs`

* Build your very first image:
```
docker build . -t hello-world-nodejs
```
* Show what images are on the system:
```
docker images
```
* Try running your image. Note that running the image in docker is super quick, not like launching a full VM.
```
docker run hello-world-nodejs
```
* Try un-commenting the additional `RUN` call after `npm install`. Notice that all the steps through `npm install` are cached and reused, assuming you built the image beforehand.
```
docker build . -t hello-world-nodejs
```

## 2 - `simple-site-nodejs`

* Build the image with a simple web app:
``` 
docker build . -t simple-site-nodejs
```
* Now, run the image: 
    * In the background (`-d`)
    * Mapped to port 3000 on localhost (`-p 3000:3000`)
    * With the name 'simple-site':
```
docker run -d -p 3000:3000 --name simple-site simple-site-nodejs
```
* Access your 'site' by going to http://localhost:3000 in your browser.
* Take a look at your running container: 
```
docker ps
```
* Shut down your container: 
``` 
docker stop simple-site
```
* Remove your container:
```
docker rm simple-site
```

## 3 - `simple-site-volume`

* Start by installing node.js on your dev machine, if you don't have it. Instructions here: https://docs.npmjs.com/getting-started/installing-node (or use your package manager of choice)
* Run `npm install` in the `03-simple-site-volume/src` directory.
* Build the image:
```
docker build . -t simple-site-volume
```
* Start the image:
    * In the background (`-d`)
    * Mapped to port 3000 (`-p 3000:3000`)
    * Named 'simple-site-on-volume' (`--name simple-site-on-volume`)
    * With this directory's `src` mounted to `/var/app` (`-v $(pwd)/src:/var/app`)
```
docker run -d -p 3000:3000 --name=simple-site-on-volume -v $(pwd)/src:/var/app simple-site-volume
```
* Access your tiny little site at http://localhost:3000 in your browser.
* Update your `app.js` file - change the message on line 9.
* Refresh your site at http://localhost:3000. Note that your site is updated, but you didn't have to rebuild the image!
* Shut down the container:
```
docker stop simple-site-on-volume
```
* Remove your container: 
```
docker rm simple-site-on-volume
```

## 4 - `docker-compose-wordpress`

* Take a look at the `docker-compose.yml` file in this exercise's directory. It specifies two images: one for wordpress (that includes PHP), and one for mariadb (an implementation of MySQL).
* Run `docker-compose up` in your terminal to bring up the containers.
* Access http://localhost:8080 to show your brand-new site!
* In the admin panel, enable the custom theme ('My Awesome Theme').
* Make some changes to the theme on disk (in 'my-awesome-theme').
* Refresh & watch them take effect.
* Use `CTRL+C` in your terminal to shut down the containers.
