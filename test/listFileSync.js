const nodejs = require('../src/index');

nodejs.listFileSync("./src", fileInfo => {
    console.log(fileInfo);
});