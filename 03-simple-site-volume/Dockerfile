FROM node:7.8.0

MAINTAINER Bend Hackers <bhg@example.com>

ENV APP_PATH /var/app

RUN mkdir $APP_PATH

WORKDIR $APP_PATH

CMD ["node", "node_modules/nodemon/bin/nodemon.js", "app.js", "localhost", "3000"]
