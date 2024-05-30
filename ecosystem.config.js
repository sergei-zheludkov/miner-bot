module.exports = {
  apps: [{
    name: 'server',
    script: './packages/server/dist/main.js',
  }, {
    name: 'bot',
    script: './packages/bot/dist/index.js',
  }],
};
