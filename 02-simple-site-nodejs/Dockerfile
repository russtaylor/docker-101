FROM node:7.8.0

MAINTAINER Bend Hackers <bhg@example.com>

ENV APP_PATH /var/app
COPY src $APP_PATH
WORKDIR $APP_PATH

RUN npm install

CMD ["node", "app.js"]
