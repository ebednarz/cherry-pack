'use strict';
var nodeEnvironment = process.env.NODE_ENV;

if (undefined === nodeEnvironment) {
    throw new Error('`process.env.NODE_ENV` is not set');
}

module.exports = function (branches) {
    if (branches.hasOwnProperty(nodeEnvironment)) {
        return branches[nodeEnvironment];
    }

    throw new Error('`process.env.NODE_ENV` did not match any provided value');
};
