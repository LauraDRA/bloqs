/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../build-utils'),
    OutputBloq = require('./../../outputBloq');

/**
 * Bloq name: arguments
 *
 * Bloq type: Output
 *
 * Description: It allows to declare two arguments instead of one.
 *
 * Return type: var
 */

var bloqArguments = _.merge(_.clone(OutputBloq, true), {

    name: 'arguments',
    bloqClass: 'bloq-arguments',
    content: [
        [{
            bloqInputId: 'ARG1',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['argument', 'arguments', 'number', 'string', 'selectVariable']
        }, {
            alias: 'text',
            value: ','
        }, {
            bloqInputId: 'ARG2',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['argument', 'arguments', 'number', 'string', 'selectVariable']
        }]
    ],
    createDynamicContent: 'softwareVars',
    code: '{ARG1},{ARG2}',
    returnType: {
        type: 'simple',
        value: 'var'
    },
    arduino: {
        code: '{ARG1},{ARG2}'
    }
});

utils.generateBloqInputConnectors(bloqArguments);

module.exports = bloqArguments;