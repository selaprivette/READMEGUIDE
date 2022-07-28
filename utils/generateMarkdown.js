function lookupLicenseMarkup(license) {
  if(license=='Apache License 2.0'){return ('[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)');}
  if(license=='GNU GPL v3.0'){'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';}
  if(license=='MIT License'){'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';}
  return '';
}

function getTemplate(){
  // return the readme structure as a string
  return (
  `# **project-title**


  ## Description
  
  **project-description**
  

  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Badges](#badges)
  - [Tests](#tests)
  - [Questions](#questions)
  

  ## Installation
  
  **installation-instructions**
  

  ## Usage
  
  **usage-information**
  

  ## License
  
  **license-name**
  

  ## Badges
  
  **license-badge**
  

  ## How to Contribute
  
  **contribution-instructions**
  

  ## Tests
  
  **test-instructions**
  
  
  ## Questions
  
  [Browse my Github](https://github.com/**github-id**)

  or
  
  Email me at [**email-address**](mailto:**email-address**)
  `)
  
}

function processWildcards(data){
  // get the structure
  let output=getTemplate();

  // make the replacements
  output=output.replaceAll('**project-title**',data.projectTitle);
  output=output.replaceAll('**project-description**',data.projectDescription)
  output=output.replaceAll('**installation-instructions**',data.installationInstructions)
  output=output.replaceAll('**usage-information**',data.usageInformation)
  if(data.licenseName=='none'){output=output.replaceAll('**license-name**','This project is not licensed')} 
  if(data.licenseName!='none'){output=output.replaceAll('**license-name**',`This project is licensed under ${data.licenseName}.  Click the badge below view the license terms.`)}
  output=output.replaceAll('**license-badge**',lookupLicenseMarkup(data.licenseName))
  output=output.replaceAll('**contribution-instructions**',data.contributionGuidelines)
  output=output.replaceAll('**test-instructions**',data.testInstructions)
  output=output.replaceAll('**email-address**',data.emailAddress)
  output=output.replaceAll('**github-id**',data.githubUsername)
  
  // return the readme as a string
  return output;
}

module.exports = {
  processWildcards
};