FROM node:16.14.2-alpine3.15

WORKDIR /bot-packages

COPY lerna.json lerna.json
COPY yarn.lock yarn.lock
COPY package.json package.json

COPY packages/shared packages/shared
COPY packages/i18n packages/i18n
COPY packages/api packages/api
COPY packages/bot packages/bot

RUN apk add g++ make py3-pip

RUN yarn cache clean
RUN yarn install --update-checksums
RUN yarn build:packages

CMD ["yarn", "start_bot:dev"]
