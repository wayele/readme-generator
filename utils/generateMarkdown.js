function generateMarkdown(data) {
  return `
# ${data.projectName}\n
## Table of Contents
<!--ts-->
   * [Project Description](#project-description)
   * [Technologies Used](#technologies-used) 
   * [Dependencies](#dependencies)
   * [Tests](#tests)
   * [Using Repo](#using-repo)
   * [Contributing to the repo](#contributing-to-the-repo)
   * [Licenses](#licenses)
   * [Inquiries](#inquiries)
   * [Developer Info](#developer-info)
<!--te-->
## Project Description
${data.description}\n
Project url: 
(https://github.com/${data.username}/${data.projectName})
## Technologies Used
${data.technology}\n
## Dependencies
${data.dependencies}
## Tests
${data.tests}
## Using Repo
${data.usingRepo}
## Contributing to the repo
${data.contributing}
## Licenses
${pickLicense(data.license)}
${data.license}
## Inquiries
${data.inquiries}\n
${contact(data.inquiries, data.email)}
## Developer Info:\n
Github username: ${data.username}\n
Email: ${data.email}
`;
}
const pickLicense = (license) => {
  if (license === "MIT") {
    return "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)"
  } else if (license === "GPL") {
    return "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)"
  } else if (license === "AGPL") {
    return "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)"
  } else if (license === "APACHE") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else (license === "No license")
  return "";
}

const contact = (inquiries, email) => {
  if (inquiries === "Yes") {
    return `${email}`
  }
  return ""
}



module.exports = generateMarkdown;
