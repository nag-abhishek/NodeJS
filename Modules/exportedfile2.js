function calledModule() {
    console.log("calledModule module is loaded and called together");
}

module.exports.calledModule = calledModule();
