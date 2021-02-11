// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) return '';
  return `
    [https://choosealicense.com/]
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) return '';

  return `
    ## License
    Use link this link if you need help choosing a license ${renderLicenseLink()}
    ${license}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, installation, usage, credits, feature, contribution, tests, tableContent, license }) {

  return `
        #${title}

        ## Description
        ${description}
    
        ## Table of Contents (Optional)
        If your README is very long, add a table of contents to make it easy for users to find what they need.
          * [${tableContent}] (# ${tableContent})
          * [${usage}] (# ${usage})
          * [${credits}] (# ${credits})
          * [${license}] (# ${license})
    
        ## Installation
        ${installation}
    
        ## Usage
        ${usage}
    
        ## Credits
        ${credits}
    
        ${renderLicenseSection()}
    
        ## Features
        ${feature}
    
        ## Contributions
        ${contribution}
    
        ## Tests
        ${tests}
    
    
      `;


}

module.exports = generateMarkdown;
