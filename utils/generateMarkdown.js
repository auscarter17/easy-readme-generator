// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license === "none") {
    return ` `;
  } else {
    return `![${license} License](https://img.shields.io/badge/license-${license}-blue)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
  return `![${license} Documentation](https://choosealicense.com/licenses/${license}/)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ![${data.license} License](https://img.shields.io/badge/license-${data.license}-blue)

  # About
  ${data.description}

  ## Table of Contents
  - [Intallation](#installation)
  - [Usage](#usage)
  - [Credit](#credit)
  - [License](#license)
  - [Contributing](#contibuting)
  - [Tests](#test)
  - [Questions](#test)

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Credit
  ${data.credit}

  # License
  This project is covered under the ${data.license} license. For more information, visit this [resource](https://choosealicense.com/licenses/) on project licenses.

  # Contributing 
  ${data.contribute}

  # Tests
  ${data.test}

  # Questions
  If you have any questions, you can find me on [github](https://github.com/${data.github}).
  You may also email me at ${data.email} 
  

`;
}

module.exports = generateMarkdown;
