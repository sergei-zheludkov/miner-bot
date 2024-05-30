## Build and Run

### Project build
1. `yarn`
2. `yarn build:packages`
3. `yarn build:project`

### Project run
1. `yarn start_server:dev`
2. `yarn start_bot:dev`

---

### Start on the server

#### Start all applications
`pm2 start ecosystem.config.js`

#### Stop all
`pm2 stop ecosystem.config.js`

#### Restart all
`pm2 restart ecosystem.config.js`

#### Reload all
`pm2 reload ecosystem.config.js`

#### Delete all
`pm2 delete ecosystem.config.js`

---
## Development flow

1. Add necessary helpers, enums, etc. into **shared** package.
2. Implementation of the required logic (like models, services, etc.) into **server** package.
3. Start server with `yarn start_server:dev`. It allows to get a fresh `openapi.json` file.
4. Automatic generation **api** package by `yarn generate:api`.
5. Implementation of necessary logic into **bot** / **front** packages.
6. Add necessary translations into **i18n** package.

---
## Husky set up

1. `husky install`
2. `husky add .husky/pre-commit "yarn typecheck:project && yarn lint:project"`
3. `chmod a+x .husky/pre-commit`
4. `husky add .husky/pre-push "yarn test:project"`
5. `chmod a+x .husky/pre-push`