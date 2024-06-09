FROM node:16.14.2-alpine3.15

WORKDIR /server-packages

COPY lerna.json lerna.json
COPY yarn.lock yarn.lock
COPY package.json package.json

COPY packages/shared packages/shared
COPY packages/server packages/server

RUN apk add g++ make py3-pip

RUN yarn cache clean
RUN yarn install --update-checksums --ignore-engines
RUN yarn build:packages

CMD ["yarn", "start_server:dev"]
