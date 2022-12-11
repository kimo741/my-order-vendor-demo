'use strict'
/* eslint-env node */
// See https://www.apollographql.com/docs/devtools/apollo-config/
module.exports = {
  client: {
    service: {
      name: 'my-service',
      url: 'http://192.168.1.36/graphql',
    },
    // Files processed by the extension
    includes: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.ts'],
  },
}
