FROM postgres:13.6-bullseye

# Деплой скриптов инициализации и смена их владельца
COPY packages/devops/services/db/init_scripts /docker-entrypoint-initdb.d
RUN chown -R postgres:postgres /docker-entrypoint-initdb.d/*

# Проверка состояния (дефолтная конфигурация)
HEALTHCHECK --interval=5s --timeout=10s --retries=3 \
  CMD pg_isready || exit 1

# точка входа и дефолтная команда
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["postgres"]