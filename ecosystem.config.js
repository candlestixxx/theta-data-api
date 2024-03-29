module.exports = {
  apps: [
    {
      name: 'theta-data-api',
      script: './dist/main.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '2G',
      env_test: {
        NODE_ENV: 'test',
        NODE_CONFIG_DIR : '/home/ubuntu/actions-runner/_work/config/config/theta-data-api'
        // TZ: 'Asia/Shanghai'
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_CONFIG_DIR : '/home/ubuntu/actions-runner/_work/config/config/theta-data-api'
      }
    }
  ]
}
