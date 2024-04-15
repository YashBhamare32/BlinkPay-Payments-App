FROM node

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm" , "run" , "dev"]