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
  Created by ${data.name}. 

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
