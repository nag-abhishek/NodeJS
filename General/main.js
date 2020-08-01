// const main = require("./app");

// main.a();

async function abc() {
    var x = await new Promise(function (res, rej) {
        res("promise is resolved");
    });
    return x;
    //console.log(x);
}
// abc();
console.log("promise resolution started");

console.log("promise resolution started");
var y = abc().then(param => {
    console.log(param);
});
// console.log(y);
