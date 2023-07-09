function renderLicenseBadge(license) {
    if (license) {
      return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
  }
  
  function renderLicenseLink(license) {
    if (license) {
      return `- [License](#license)`;
    }
    return '';
  }
  
  function renderLicenseSection(license) {
    if (license) {
      return `## License
    
  This project is licensed under the ${license} license.`;
    }
    return '';
  }
  
  function generateMarkdown(data) {
    return `# ${data.title}
    
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(data.license)}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions, please feel free to reach out:
  
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  