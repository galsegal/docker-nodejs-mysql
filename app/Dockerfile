FROM node:8.4.0

RUN npm install -g nodemon

RUN mkdir /app
ADD . /app
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .
