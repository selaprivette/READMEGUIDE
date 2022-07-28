const { prompt } = require('inquirer');
const questions = require('./utils/questions.js');
const { writeReadme } = require('./utils/utils.js');
const { processWildcards } = require('./utils/generateMarkdown.js');

const init = async () => {
    // ask questions
    const data = await prompt(questions);
    // pass answer object to processWildcards, and write the readme
    writeReadme(processWildcards(data));
    console.log('./output/README.md generated')
  };

init();
