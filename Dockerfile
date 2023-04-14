FROM node:16
WORKDIR 'usr/src/app'

COPY package*.json ./
RUN npm install

COPY server ./server
COPY client ./client

RUN npm run build

EXPOSE 3001

CMD ["node", "server/index.js"]