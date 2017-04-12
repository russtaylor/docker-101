# From _any_ image & tag (default tag is 'latest')
FROM node:7.8.0

MAINTAINER Bend Hackers <bhg@example.com>

# Set environment variables
ENV APP_PATH /var/app

# Copy folders/files into the image
COPY src $APP_PATH

# Set the work directory
WORKDIR $APP_PATH

# Run arbitrary commands
RUN npm install
# RUN echo 'Hello, world!' >> hello-world.txt

# Run when the container starts
CMD ["node", "app.js"]
