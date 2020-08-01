const mod1 = require('./exportedfile');
const mod2 = require('./exportedfile2');

module.exports = function consolidatedModules() {
    mod1.defModule();
    console.log('consolidated modules');
}