// require modules 
const fs = require('fs'); 
const inquirer = require('inquirer'); 

// linking to page where the README is developed 
const generatePage = require('./utils/generateMarkdown.js');

// array of questions for user, inquirer to prompt said questions//
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'gitHub',
        message: 'What\'s your GitHub username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('PLEASE ENTER GITHUB USERNAME!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What\'s your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('PLEASE ENTER EMAIL ADDRESS!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'What\'s your project name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('PLEASE ENTER PROJECT NAME');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('PLEASE ENTER DESCRIPTION!');
                return false; 
            }
        }
    }, 
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which of license should your project have?',
        choices: [
        "MPL",
        "GPL",
        "Apache",
        "MIT",
        "CC",
        "BSD",],
        default: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('PLEASE SELECT LICENSE!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
        default: "There are no installation steps for this project",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('PLEASE ENTER INSTALLATION STEPS!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('PLEASE ENTER USAGE DESCRIPTION!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be run to run tests?',
        default: "There are no test instructions for this project",
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contribution guidelines?',
        default: "There are no contribution guidelines for this project",
    }
]);
};

// function to write README file using file system 
const writeFile = data => {
    fs.writeFile(' ./output/README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("README SUCCESSFULLY CREATED!")
        }
    })
}; 

// function call to initialize program
questions()

.then(answers => {
    return generatePage(answers);
})
.then(data => {
    return writeFile(data);
})

.catch(err => {
    console.log(err)
})