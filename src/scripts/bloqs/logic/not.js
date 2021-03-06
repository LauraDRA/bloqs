/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    OutputBloq = require('./../outputBloq');

/**
 * Bloq name: not
 *
 * Bloq type: Output
 *
 * Description: It returns the opposite of the boolean given.
 *
 * Return type: bool
 */

var not = _.merge(_.clone(OutputBloq, true), {

    name: 'not',
    bloqClass: 'bloq-not',
    content: [
        [{
            alias: 'text',
            value: 'bloq-not-not'
        }, {
            bloqInputId: 'CONDITION',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['selectVariable']
        }]
    ],
    code: '!{CONDITION}',
    returnType: {
        type: 'simple',
        value: 'bool'
    },
    arduino: {
        code: '!{CONDITION}'
    }
});

utils.preprocessBloq(not);

module.exports = not;