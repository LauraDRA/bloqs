/*global require */
'use strict';

var _ = require('lodash'),
    utils = require('./../../../build-utils'),
    OutputBloq = require('./../../../outputBloq');

/**
 * Bloq name: clear led matrix
 *
 * Bloq type: Statement
 *
 * Description:
 *
 */

var mkbReadMagneticField = _.merge(_.clone(OutputBloq, true), {

    name: 'mkbReadMagneticField',
    bloqClass: 'bloq-mbot-color',
    content: [
        [{
            alias: 'text',
            value: 'Leer el campo magnético en el eje'
        },
        {
            id: 'AXIS',
            alias: 'staticDropdown',
            options: [{
                label: 'X',
                value: 'X'
            }, {
                label: 'Y',
                value: 'Y'
            }, {
                label: 'Z',
                value: 'Z'
            }]
        },
        {
            alias: 'text',
            value: 'in-the'
        }, {
            id: 'COMPASS',
            alias: 'dynamicDropdown',
            options: 'mkb_compass'
        }]
    ],
    returnType: {
        type: 'simple',
        value: 'float'
    },
    arduino: {
        code: '{COMPASS}.getHeading{AXIS}()'
    }
});
utils.preprocessBloq(mkbReadMagneticField);

module.exports = mkbReadMagneticField;
