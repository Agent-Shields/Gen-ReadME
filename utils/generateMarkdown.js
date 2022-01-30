// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  return `# ${readmeData.title}

## Description :

${readmeData.description}

## Table of Contents: 

- [Installation](#installation-instructions)
- [Usage](#usage)
- [Contributing](#contribution-guidelines)
- [Tests](#test-instructions)
- [License](#license-information)
- [Questions](#questions)

### Installation Instructions

${readmeData.installation}

### Usage :

${readmeData.usage}

### Contribution Guidelines

${readmeData.contribution}

### Test Instructions

${readmeData.tests}

### License Information

${readmeData.license}

## Questions : 

If you have any questions please reach out to me either through GitHub or email me directly, reference my contact information below.

### Username

https://github.com/${readmeData.questionsGitUser}

### Email

${readmeData.questionsEmail}

`
}

module.exports = generateMarkdown;
