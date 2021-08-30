FROM node:12.22.2-alpine
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY . .