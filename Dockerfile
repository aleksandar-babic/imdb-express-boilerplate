FROM node:10-alpine

RUN apk update && apk add python g++ make

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]