const linkBadges = require('./badges');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';

  let badge = linkBadges[license];
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  return `
  [https://choosealicense.com/](https://choosealicense.com/)
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';

  return `
  ## License
  Use this link if you need help choosing a license ${renderLicenseLink(license)}
  ${license ? license : ''}
  `

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
    
  ## Table of Contents (Optional)
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  ${(!data.tableContent) ? '' :
      `* [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Features](#features)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)`
    }
 

   
    
  ## Installation
  * ${data.installation}
    
  ## Usage
  ![./image/Screenshot.png](./image/Screenshot.png)
  ${data.usage}


  ## Credits
  ${data.credit ? data.credit : ''}

  This repository is licensed under ${renderLicenseSection(data.license)}  
    
  ## Features
  ${data.feature ? data.title : ''}
    
  ## Contributions
  ${data.contribution ? data.contribution : ''}
    
  ## Tests
  ${data.test}

  ## Questions
  If you have any questions or comment about this repository, you can reach me at [${data.email}](${data.email}).
  Feel free to view more of my work on GitHub at [${data.username}](https://github.com/${data.username})
  `;
}

module.exports = generateMarkdown;
