/**
 * Created by zenymax on 2/27/17.
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./configure.store.prod')
} else {
  module.exports = require('./configure.store.dev')
}
