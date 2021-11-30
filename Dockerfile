FROM node:16-alpine

WORKDIR /usr/src/test
COPY package*.json ./
RUN npm ci

RUN mkdir -p /dist/node_modules
RUN cp -r node_modules/* /dist/node_modules/
ENV NODE_PATH /dist/node_modules

COPY . .

CMD [ "npm", "run", "test-coverage" ]
