#!/bin/bash

DATE=`date +%Y-%m-%d_%Hh%Mm`
BACKUP_PATH="../var/www/www-root/data/miner_bot/miner-bot/dumps"

docker exec postgres-container pg_dump -U root -F t miner_bot > $BACKUP_PATH/miner_bot_$DATE.tar
docker cp bot-miner-container:/bot/packages/bot-miner/storage/CHATS $BACKUP_PATH/CHATS_$DATE