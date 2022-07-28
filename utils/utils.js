const fs = require('fs');

const writeReadme = (data) => {
    fs.writeFile('./output/README.md', data, (err) => {
        if (err) console.log(err);
    });
};

module.exports = {
    writeReadme,
};