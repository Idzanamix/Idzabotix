/* eslint-disable no-undef */
module.exports = {
  apps: [
    {
      name: 'toolkinamix', // 
      script: 'dist/index.js',
      instances: 1,
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '512M',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
