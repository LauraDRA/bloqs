/*global require */
'use strict';

var _ = require('lodash');
var StatementBloq = require('./../../statementBloq');

var bloq = _.merge(_.clone(StatementBloq, true), {

    name: 'continuousServoStopAdvanced',
    content: [
        [{
            alias: 'text',
            value: 'Parar servo'
        }, {
            alias: 'bloqInput',
            acceptType: 'all'
        }]
    ],
    code: {
        setup: ['{0}'],
        loop: ['{0}']
    }
});

module.exports = bloq;