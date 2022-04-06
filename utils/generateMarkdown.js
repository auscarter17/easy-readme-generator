// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  return `![${license} License](https://img.shields.io/badge/license-${license.split(' ').join('%20')}-blue)`;
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
  return `# ${data.title}

  # About
  ${data.description}

  ## Table of Contents
  - [Intallation](#installation)
  - Usage
  - Credit
  - License
  - Contributing
  - Tests
  - Questions

`;
}

module.exports = generateMarkdown;
