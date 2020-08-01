const http = require("http");

function promiseExploration() {
    var x = new Promise(function (res, rej) {
        console.log("promise executed");
        res("manual error introduced");
    });

    x.then(function (err) {
        console.log("after promise execution");
        return Promise.reject("another promise executed");
    }).then((x) => {
        console.log(x);
    }).catch((err) => {
        console.log(err);
    });
}

exports.a = promiseExploration;