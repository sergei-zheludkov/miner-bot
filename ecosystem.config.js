module.exports = {
  apps: [{
    name: 'server',
    script: './packages/server/dist/main.js',
    env_development: {
      NODE_ENV: 'development',
      DB_HOST: 'localhost',
      DB_PORT: 5432,
      PG_DATABASE: 'miner_bot',
      DB_USERNAME: 'sergozheludkov',
      DB_PASSWORD: 'sergozheludkov',
      DB_SYNC: 'false',
      DB_LOG: 'false',
      DB_MIGRATIONS: 'true',
      WEBHOOK_HOST_BASE: 'http://localhost:5050/',
    },
    env_production: {
      NODE_ENV: 'production',
      DB_HOST: 'localhost',
      DB_PORT: NaN,
      PG_DATABASE: '',
      DB_USERNAME: '',
      DB_PASSWORD: '',
      DB_SYNC: 'false',
      DB_LOG: 'true',
      DB_MIGRATIONS: 'true',
      WEBHOOK_HOST_BASE: 'http://localhost:PORT/',
    },
  }, {
    name: 'bot',
    script: './packages/bot/dist/index.js',
    env_development: {
      NODE_ENV: 'development',
      PORT: 5050,
      TELEGRAM_TOKEN: '',
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: NaN,
      TELEGRAM_TOKEN: '',
    },
  }],
};
