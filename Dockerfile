FROM node:16-alpine

WORKDIR /usr/src/test
COPY package*.json ./
RUN npm ci

COPY . .

CMD [ "npm", "run", "test-coverage" ]
