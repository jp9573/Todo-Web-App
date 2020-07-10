FROM node:latest

LABEL auther="Jp9573"

COPY . /app
WORKDIR /app/

RUN npm install --silent

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]