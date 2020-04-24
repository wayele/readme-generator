function generateMarkdown(data) {
  return `
# ${data.projectName}\n
# Table of Contents
<!--ts-->
   * [${data.projectName}](#${data.projectName})
   * [Table of contents](#table-of-contents)
   * [Project Description] (#project-description)
   * [Project url](#project-url)
   * [Developer Info](#developer-info)
   * [Technoloies Used](#technologies-used)
   * [Licenses](#licenses)
   * [Dependencies](#dependecies)
   * [Tests](#tests)
   * [UsingRepo](#using-repo)
   * [Contributing](#contributing)
<!--te-->

# Project Description
${data.description}\n
Project url: 
${data.projectURL}
# Developer Info:\n
Github username: ${data.username}
Email: ${data.email}\n
# Technologies Used
${data.technology}\n
# Licenses

${data.license}
# Dependencies
${data.dependencies}
# Tests
${data.tests}
# Using the repo
${data.usingRepo}
# Contributing to the repo
${data.contributing}
`;
}
const createTOC = () => {

}

module.exports = generateMarkdown;
