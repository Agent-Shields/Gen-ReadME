// store license badges
const mitBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
const eclipseBadge = '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
const iscBadge = '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
const mozillaBadge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)' ;
const perlBadge = '![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)' ;

// store license links
const mitLink = `[(https://opensource.org/licenses/MIT)]`;

// store empty object for license
var curLicense = '';

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None'){
    return ''
  } else if (license === 'MIT') {
    console.log(license);
    return mitBadge;
  }
  // }  else if (license === 'Eclipse') {
  //   return eclipseBadge;
  // } else if (license === 'ISC') {
  //   return iscBadge;
  // } else if (license === 'Mozilla') {
  //   return mozillaBadge;
  // } else if (license === 'Perl') {
  //   return perlBadge;
  // }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else if (license === 'MIT'){
    console.log(license)
    return mitLink;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else if  (license === 'MIT') {
    return ` ${mitLink}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    `
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(readmeData) {
  console.log(readmeData.license)
  console.log(typeof(readmeData.license))
  console.log(readmeData)
  return `# ${readmeData.title}

## Description :

${readmeData.description} 

# ${renderLicenseBadge(readmeData.license[0])}

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

${renderLicenseSection(readmeData.license[0])}

Here is a link to this license : ${renderLicenseLink(readmeData.license[0])}

## Questions : 

If you have any questions please reach out to me either through GitHub or email me directly, reference my contact information below.

### Username

https://github.com/${readmeData.questionsGitUser}

### Email

${readmeData.questionsEmail}

`

}

module.exports = generateMarkdown;
