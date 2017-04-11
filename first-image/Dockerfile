FROM node:7.8.0

MAINTAINER Bend Hackers <bhg@bendhackers.com>

# Set environment variables
ENV APP_PATH /var/app

# Run arbitrary commands
RUN apt-get -y update
RUN apt-get -y install ruby

# Set the work directory
WORKDIR $APP_PATH

# Run when the container starts
CMD ["app.rb", "-x"]
