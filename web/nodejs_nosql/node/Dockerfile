FROM node:17-alpine

WORKDIR /usr/srv/app

COPY ./src/index.js .
COPY ./src/package.json .

RUN npm install

CMD ["node", "index.js"]