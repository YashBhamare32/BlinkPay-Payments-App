FROM node:21.6.1-slim

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node" , "index.js"]