FROM node:10-alpine

EXPOSE 3010

WORKDIR /usr/src/app51

COPY package.json package-lock.json* ./ 

RUN npm install && npm cache clean --force

RUN ls /usr/src/app51/



COPY . .

CMD [ "node", "app.js" ]