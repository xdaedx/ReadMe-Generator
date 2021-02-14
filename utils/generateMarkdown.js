const fs = require('fs')

// Creates Readme Text
function generateMarkdown(answerObject){
  let {
    name, 
    description, 
    toc, 
    installation,
    usage, 
    liveSiteUrl, 
    ss, 
    credits, 
    license, 
    features,
    contribution,
    username,
    email,
    tests
  } = answerObject

  // Table of Contents
  if(toc){
    toc = `## Table of Contents\n* [Installation](#installation)\n* [Usage](#usage)\n`
    if(credits){
      toc += `* [Credits](#credits)\n`
    }
    if(license){
      toc += `* [License](#license)\n`
    }
    if(features){
      toc += `* [Features](#features)\n`
    }
    if(contribution){
      toc += `* [Contribution](#contribution)\n`
    }
    toc += `* [Questions](#questions)\n`
    if(tests){
      toc += `* [Tests](#tests)`
    }
  } else{
    toc = ``
  }

  // Live Site
  if(!liveSiteUrl){
    liveSiteUrl = ``
  } else {
    liveSiteUrl = `[Click to visit Live Website](${liveSiteUrl})`
  }

  // Screenshot
  if(!ss){
    ss = ``
  } else {
    ss = `\n![alt text](images/screenshot.png)`
  }

  // Credits
  if(!credits){
    credits = ``
  } else {
    credits = `
## Credits
${credits}`
  }

  // License
  if(!license){
    license = ``
    licenseBadge = ``
  } else {
    switch(license){
      case `Apache 2.0 License`:
        license = `## License\n`
        license += `This application is covered under the Apache 2.0 License.`
        licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        break;
      case `Boost Software License 1.0`:
        license = `## License\n`
        license += `This application is covered under the Boost Software 1.0 License.`
        licenseBadge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        break;
      case `BSD 3-Clause License`:
        license = `## License\n`
        license += `This application is covered under the BSD 3-Clause License.`
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        break;
      case `BSD 2-Clause License`:
        license = `## License\n`
        license += `This application is covered under the BSD 2-Clause License.`
        licenseBadge = `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
        break;
    }
  }

  // Features
  if(!features){
    features = ``
  } else {
    features = `
## Features  
${features}`
  }

  // Contribution
  if(!contribution){
    contribution = ``
  } else {
    contribution = `
## Contribution
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)`
  }

  // Questions
  username = `Click [here](https://github.com/${username}) to check out my Github!\n`
  if(!email){
    email = ``
  } else {
    email = `If you would like to contact me, please e-mail me at ${email}`
  }

  // Tests
  if(tests){
    tests = `
## Tests
${tests}`
  } else{
    tests = ``
  }

  // README.md
  return `# ${name}  
${licenseBadge}
## Description
${description}
${toc}
## Installation
${installation}  
${liveSiteUrl}
## Usage
${usage}
${ss}
${credits}
${license}
${features}
${contribution}
## Questions  
${username}
${email}
${tests}
`
}

function writeFile(destination, text){
  return new Promise((resolve, reject)=>{
    fs.writeFile(destination, text, err =>{
      if(err){
        reject(err)
        return
      }
      resolve({
        ok: true,
        message: `File Created!`
      })
    })
  })
}







module.exports = { generateMarkdown, writeFile }