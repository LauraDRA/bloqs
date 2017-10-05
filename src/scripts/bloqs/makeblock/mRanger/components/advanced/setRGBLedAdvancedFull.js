/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../../build-utils'),
    StatementBloq = require('./../../../../statementBloq');

/**
 * Bloq name: mBotSetRGBLedAdvancedFull
 *
 * Bloq type: Statement
 *
 * Description: It switches on a specific rgb led, selectable
 *              from a first drop-down, with the selectable colour
 *              from a second drop-down.
 *
 * Return type: none
 */

var mBotSetRGBLedAdvancedFull = _.merge(_.clone(StatementBloq, true), {

    name: 'mBotSetRGBLedAdvancedFull',
    bloqClass: 'bloq-mbot-setrgbLed',
    content: [
        [{
            alias: 'text',
            value: 'bloq-rgbLed'
        }, {
            bloqInputId: 'LED',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }, {
            alias: 'text',
            value: 'bloq-rgbLed-red'
        }, {
            bloqInputId: 'RED',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }, {
            alias: 'text',
            value: 'bloq-rgbLed-green'
        }, {
            bloqInputId: 'GREEN',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }, {
            alias: 'text',
            value: 'bloq-rgbLed-blue'
        }, {
            bloqInputId: 'BLUE',
            alias: 'bloqInput',
            acceptType: ['all'],
            suggestedBloqs: ['number', 'selectVariable']
        }]
    ],
    code: '',
    arduino: {
        code: 'robot.setLed({LED},{RED}, {GREEN}, {BLUE});'
    }

});

utils.preprocessBloq(mBotSetRGBLedAdvancedFull);

module.exports = mBotSetRGBLedAdvancedFull;