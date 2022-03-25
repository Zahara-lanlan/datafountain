'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
console.log("开发环境")
module.exports = merge(prodEnv, {
  NODE_ENV: '"developments"',
  VUE_APP_TEST:'"http://175.24.79.108:8080"'
})
