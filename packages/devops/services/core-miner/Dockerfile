FROM node:16.14.2-alpine3.15

WORKDIR /core

COPY lerna.json lerna.json
COPY yarn.lock yarn.lock
COPY package.json package.json

COPY packages/shared packages/shared
COPY packages/core-miner packages/core-miner

RUN apk add g++ make py3-pip

RUN yarn cache clean
RUN yarn install --update-checksums --ignore-engines --non-interactive
RUN yarn build:packages
RUN yarn build:services

CMD ["yarn", "core-miner:prod"]
