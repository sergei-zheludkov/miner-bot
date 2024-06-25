#!/bin/bash

DATE=`date +%Y-%m-%d_%H%M%S`

BACKUP_PATH="../var/www/www-root/data/miner_bot/miner-bot/dumps"

docker exec postgres.prod pg_dump -U root -F t miner_bot > $BACKUP_PATH/miner_bot_$DATE.tar
docker cp bot.prod:/bot/packages/bot/storage/CHATS $BACKUP_PATH/CHATS_$DATE