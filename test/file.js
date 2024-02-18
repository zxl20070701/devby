const nodejs = require('../index');

nodejs.listFileSync("./src", fileInfo => {
    console.log(fileInfo);
});