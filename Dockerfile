FROM node:10-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY ./src/ ./src

CMD [ "yarn", "dev" ]