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
3. Задаешь пароль для входа на сервер: `Товары => Виртуальные серверы => Инструкция => Пароль`.
4. Спускаешься в `Панель управления => ispManager` и вводишь логин пароль.
5. Прикрепляешь домен в `Сайты => Создать сайт`.
6. В `... => Конфиг. файл` прописываешь следующие locations:
    ```
    add_header 'Access-Control-Allow-Origin' '*';
    add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
    add_header 'Access-Control-Allow-Headers' 'Content-Type,Accept';
    location /api/ {
        access_log /var/log/nginx/server-access-api.log;
        error_log /var/log/nginx/server-error-api.log;
        proxy_pass http://localhost:3000/api/;
        proxy_redirect off;
    }
    location /bot/ {
        access_log /var/log/nginx/telegram-access-api.log;
        error_log /var/log/nginx/telegram-error-api.log;
        proxy_pass http://localhost:5050/;
        proxy_redirect off;
    }
    ```
7. Перезапускаешь **nginx** в shell-клиенте: `sudo systemctl restart nginx`.
8. Подключаешься по SSH к серверу `ssh name@ip`.
9. Настраиваешь подключение к **github** к серверу по **SSH** по [инструкции](https://habr.com/ru/articles/755036/).
10. Клонируешь проект в папку
11. Устанавливаешь nodejs через nvm по [инструкции п.3](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04).
12. Устанавливаешь docker по [инструкции](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04).
13. Вносишь настройки в .env файлы и добавляешь init_scripts.
14. Прописываешь в .env бота `WEBHOOK_HOST` на локальной машине.
15. Прописываешь в .env бота `TELEGRAM_TOKEN` на локальной машине. 
16. Запускаешь команду в shell-клиенте команду `urban-bot set-webhook telegram` (При след запуске бота, через поллинг, веб-хук сбрасывается)
17. Переходишь в папку проекта.
18. Запускаешь `docker compose up -d postgres`.
19. Запускаешь `docker compose up -d server`.
20. Запускаешь `docker compose up -d bot`.

## New version deploy

1. `ssh name@ip` - подключаемся по SSH к серверу через терминал.
2. `cd ../var/www/www-root/data/ton-miner-bot/miner-bot` - переходим в папку с ботом.
3. `yarn stop_pm2:prod` - останавливает бот.
4. `git pull` - тянем последние изменения из ветки `production`

`sudo systemctl restart nginx`
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

#### container list
`docker ps`

#### images list
`docker images`

#### logs
`docker logs -f`

#### start project
`docker compose up -d`

#### open container terminal
`docker exec -it {{container_id}} bash/sh`

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


1. Переходишь в директорию с файлами проекта.
```
cd ../var/www/www-root/data/ton-miner-bot/miner-bot
```
2. Тянешь обновления из хранилища.
```
git pull
```
3. Переходишь в директорию с файлами запуска.
```
cd packages/devops
```
4. Копируешь БД из докер-контейнера postgres. 
```
docker exec postgres-container pg_dump -U root -F t miner_bot > miner_bot.tar
```
5. Копируешь Storage-файл из докер-контейнера bot.
```
docker cp bot-miner-container:/bot/packages/bot-miner/storage /var/www/www-root/data/miner_bot/miner-bot/packages/bot-miner
```
6. Команда на восстановление БД из папки packages/devops

```
docker cp miner_bot.tar postgres-container:/ && docker exec postgres-container pg_restore -U sergei_zheludkov -C -d miner_bot miner_bot.tar 
```
---
-Переписать-
8. `docker cp miner_bot.tar {{postgres_container_id}}:/`
9. `docker exec -it {{container_id}} bash`
10. `pg_restore -U sergei_zheludkov -C -d miner_bot miner_bot.tar`
11. `docker compose down bot`
12. `docker compose down server`
13. `docker rmi {{image_id: bot}}`
14. `docker rmi {{image_id: server}}`
15. `docker compose up -d bot`

Выкачать Error file
```
docker cp core-miner-container:/server/packages/core-miner/logs/error-file /var/www/www-root/data/miner_bot/miner-bot/error-file
```
команда для cron для создания копий БД: 
```
docker exec postgres-container pg_dump -U root -F t miner_bot > ../var/www/www-root/data/miner_bot/miner-bot/dumps/miner_bot_`date +%Y_%m_%d-%H_%M`.tar
```
команда для cron для создания копий локального хранилища бота:
```
docker cp bot-miner-container:/bot/packages/bot-miner/storage/CHATS ../var/www/www-root/data/miner_bot/miner-bot/dumps/CHATS_`date +%Y_%m_%d-%H_%M`
```
команда для установки в `Планировщик CRON` в ISP Manager
```
/var/www/www-root/data/miner_bot/miner-bot/packages/devops/scripts/dump.sh >/dev/null 2>&1
```
---

[DB_RESTORE GUIDE 1](https://stackoverflow.com/questions/24718706/backup-restore-a-dockerized-postgresql-database)\
[DB_RESTORE GUIDE 2](https://medium.com/@burakkocakeu/get-pg-dump-from-a-docker-container-and-pg-restore-into-another-in-5-steps-74ca5bf0589c)\
[DB_RESTORE GUIDE 3](https://gist.github.com/spalladino/6d981f7b33f6e0afe6bb)\
[GITLAB RUNNER GUIDE](https://technoupdate.medium.com/how-to-configure-gitlab-runner-on-ubuntu-20-04-c26e2f16fd24)\
[GITLAB CI/CD GUIDE](https://www.youtube.com/watch?v=dLfqjoE-WNQ)\
[CRON JOB GUIDE 1](https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-ubuntu-1804)
[CRON JOB GUIDE 2](https://bobcares.com/blog/postgres-docker-backup-cron/)