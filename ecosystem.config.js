module.exports = {
  apps : [{
    name: 'API',
    script: './server/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'root',
      host : '106.53.46.97',
      ref  : 'origin/master',
      repo : 'git@github.com:yyISACoder/nuxt-pm2-deploy.git',
      path : '/var/www/pm2-deploy',
      'post-deploy' : 'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
};
