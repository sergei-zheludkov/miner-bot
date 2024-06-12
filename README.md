## Build and Run

### Project build
1. `yarn`
2. `yarn build:packages`
3. `yarn build:services`

### Project run
1. `yarn start_server:dev`
2. `yarn start_bot:dev`

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

---

## First deploy

Регистрируешь аккаунт на [firstvds](https://firstvds.ru/?from=1073677)

Promocode: 6481073677

1. Переходишь в  `Товары => Виртуальные серверы => +Заказать`.
2. Далее в `Товары => Домены => +Регистрация`.

4. Задаешь пароль для входа на сервер: `Товары => Виртуальные серверы => Инструкция => Пароль`.
5. Спускаешься в `Панель управления => ispManager` и вводишь логин пароль.
6. 

## New version deploy

1. `ssh name@ip` - подключаемся по SSH к серверу через терминал.
2. `cd ../var/www/www-root/data/ton-miner-bot/miner-bot` - переходим в папку с ботом.
3. `yarn stop_pm2:prod` - останавливает бот.
4. `git pull` - тянем последние изменения из ветки `production`

---

## Start on the server

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

## DOCKER 

[DOCKER UBUNTU INSTALL GUIDE](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04)

#### container list
`docker ps`

#### images list
`docker images`

#### logs
`docker logs -f`

#### start project
`docker compose up -d`

#### open container terminal
`docker exec -it {{container_id}} bash`

#### close container terminal
`Ctrl+D`

#### import DB data into container
`cat {{dump_name}}.sql | docker exec -i {{container_id}} psql -U {{user}} -d {{db_name}}`

#### file copy from container
`docker cp {{container_id}}:/bot/packages/bot/storage /var/www/www-root/data/ton-miner-bot/miner-bot/packages/bot`

---

## POSTGRES

#### change db
`\c {{db_name}}`

#### table list
`\dt`


---

## System update

`sudo systemctl restart nginx`

#### Without transfer DB 

1. `cd ../var/www/www-root/data/ton-miner-bot/miner-bot`
2. `git pull`
3. `cd packages/devops`
4. `docker cp {{container_id}}:/bot/packages/bot/storage /var/www/www-root/data/ton-miner-bot/miner-bot/packages/bot`
5. `docker compose down bot`
6. `docker compose down server`
7. `docker rmi {{image_id: bot}}`
8. `docker rmi {{image_id: server}}`
9. `docker compose up -d bot`

#### Without transfer DB 
1. `cd ../var/www/www-root/data/ton-miner-bot/miner-bot`
2. `git pull`
3. `cd packages/devops`
4. `docker cp {{bot_container_id}}:/bot/packages/bot/storage /var/www/www-root/data/ton-miner-bot/miner-bot/packages/bot`
5. `docker exec {{postgres_container_id}} pg_dump -U root -F t miner_bot > miner_bot.tar`
6. `docker cp {{postgres_container_id}}:/miner_bot.tar /var/www/www-root/data/ton-miner-bot/miner-bot/packages/bot`
7. `docker cp miner_bot.tar {{postgres_container_id}}:/`
8. `docker exec -it {{container_id}} bash`
9. `pg_restore -U sergei_zheludkov -C -d miner_bot miner_bot.tar`
10. `docker compose down bot`
11. `docker compose down server`
12. `docker rmi {{image_id: bot}}`
13. `docker rmi {{image_id: server}}`
14. `docker compose up -d bot`

[DB_RESTORE GUIDE 1](https://stackoverflow.com/questions/24718706/backup-restore-a-dockerized-postgresql-database)
[DB_RESTORE GUIDE 2](https://medium.com/@burakkocakeu/get-pg-dump-from-a-docker-container-and-pg-restore-into-another-in-5-steps-74ca5bf0589c)
