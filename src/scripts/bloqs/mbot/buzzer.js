/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../build-utils'),
    StatementBloq = require('./../statementBloq');

/**
 * Bloq name: mBotBuzzer
 *
 * Bloq type: Statement
 *
 * Description: It turns on a specific buzzer, selectable
 *              from a first drop-down, with a basic note,
 *              selectable from a second drop-down, during
 *              a given period of time.
 *
 * Return type: none
 */

var mBotBuzzer = _.merge(_.clone(StatementBloq, true), {

    name: 'mBotBuzzer',
    bloqClass: 'bloq-mbot-buzzer',
    content: [
        [{
            alias: 'text',
            value: 'Hacer sonar la nota'
        },{
            id: 'NOTE',
            alias: 'staticDropdown',
            options: [{
                label: 'bloq-buzzer-do',
                value: '261'
            }, {
                label: 'bloq-buzzer-re',
                value: '293'
            }, {
                label: 'bloq-buzzer-mi',
                value: '329'
            }, {
                label: 'bloq-buzzer-fa',
                value: '349'
            }, {
                label: 'bloq-buzzer-sol',
                value: '392'
            }, {
                label: 'bloq-buzzer-la',
                value: '440'
            }, {
                label: 'bloq-buzzer-si',
                value: '494'
            },{
                label: 'bloq-buzzer-do-#',
                value: '277'
            }, {
                label: 'bloq-buzzer-re-#',
                value: '311'
            }, {
                label: 'bloq-buzzer-fa-#',
                value: '370'
            }, {
                label: 'bloq-buzzer-sol-#',
                value: '415'
            }, {
                label: 'bloq-buzzer-la-#',
                value: '466'
            }]
        }, {
            alias: 'text',
            value: 'beat'
        }, {
            id: 'BEAT',
            alias: 'staticDropdown',
            options: [{
                label: 'doble',
                value: '2000'
            },{
                label: 'entero',
                value: '1000'
            }, {
                label: 'medio',
                value: '500'
            }, {
                label: 'cuarto',
                value: '250'
            }, {
                label: 'octavo',
                value: '125'
            }]
        }]
    ],
    code: '',
    arduino:{
        includes:['mBot.h' ],
        needInstanceOf:[{
            name: 'mBot',
            type: 'MBot'
        }],
        code: 'mBot.tone({NOTE},{BEAT});'
    }
});
utils.generateBloqInputConnectors(mBotBuzzer);

module.exports = mBotBuzzer;
