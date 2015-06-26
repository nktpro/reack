var Promise = require('bluebird');
require('babel-runtime/core-js/promise').default = Promise;

if (typeof window != 'undefined') {
    window.Promise = Promise;
}
