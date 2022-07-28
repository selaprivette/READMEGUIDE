module.exports = [
    {
        type: "input",
        message: "Enter the project title?",
        name: "projectTitle",
    },
    {
        type: "input",
        message: "Enter the project description?",
        name: "projectDescription",
    },
    {
        type: "input",
        message: "Enter the installation instructions?",
        name: "installationInstructions",
        default: "There are no installation instructions for this project",
    },
    {
        type: "input",
        message: "Enter the usage information?",
        name: "usageInformation",
        default: "There is no usage information for this project",
    },
    {
        type: "list",
        message: "Select the license, if any",
        choices: ["none", "Apache License 2.0", "GNU GPL v3.0", "MIT License"],
        name: "licenseName",
        default: "none"
    },
    {
        type: "input",
        message: "Enter the contribution guidelines?",
        name: "contributionGuidelines",
        default: "There are no contribution guidelines for this project",
    },
    {
        type: "input",
        message: "Enter the test instructions for this project?",
        name: "testInstructions",
        default: "There are no test instructions for this project",
    },
    {
        type: "input",
        message: "Enter Github username?",
        name: "githubUsername",
    },
    {
        type: "input",
        message: "Enter your email address?",
        name: "emailAddress",
    }
];