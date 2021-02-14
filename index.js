//Depancies for it work 
const inquirer = require('inquirer')
const { generateMarkdown, writeFile } = require('./utils/generateMarkdown')
const fs = require('fs');

//Requesting information from user
inquirer.prompt([
    {
        name: `name`,
        message: `What is your project's name? (Required)`,
        type: `input`,
        validate: input =>{
            if(input){
                return true
            } else{
                console.log(`Please type in a valid name.`)
                return false
            }
        }
    },
    {
        name: `description`,
        message: `Please input a description to your project:`,
        type: `input`,
        validate: input =>{
            if(input){
                return true
            } else{
                console.log(`Please type in a valid description.`)
                return false
            }
        }
    },
    {
        name: `toc`,
        message: `Do you want to include Table of Contents?`,
        type: `confirm`,
        default: false
    },
    {
        name: `installation`,
        message: `Please input a description on how to install your project:`,
        type: `input`,
        validate: input =>{
            if(input){
                return true
            } else{
                console.log(`Please type in a valid description.`)
                return false
            }
        }
    },
    {
        name: `usage`,
        message: `Please input a description on how to use your project:`,
        type: `input`,
        validate: input =>{
            if(input){
                return true
            } else{
                console.log(`Please type in a valid description.`)
                return false
            }
        }
    },
    {
        name: `liveSiteConfirm`,
        message: `Do you want to include your live website?`,
        type: `confirm`,
        default: false
    },
    {
        name: `liveSiteUrl`,
        message: `Please input your live website's url:`,
        type: `input`,
        when: ({ liveSiteConfirm }) => {
            if (liveSiteConfirm) {
              return true;
            } else {
              return false;
            }
        },
        validate: input =>{
            if(input){
                return true
            } else{
                console.log(`Please type in a valid url.`)
                return false
            }
        }
    },
    {
        name: `ss`,
        message: `Do you want to use a screenshot? (Saved as images/screenshot.png)`,
        type: `confirm`,
        default: false
    },
    {
        name: `creditsConfirm`,
        message: `Do you want to credit any collaborators?`,
        type: `confirm`,
        default: false
    },
    {
        name: `credits`,
        message: `Please type in the description to your credits section:`,
        type: `input`,
        when: ({ creditsConfirm }) => {
            if (creditsConfirm) {
              return true;
            } else {
              return false;
            }
        },
        validate: input =>{
            if(input){
                return true
            } else{
                console.log(`Please type in a valid description.`)
                return false
            }
        }
    },
    {
        name: `licenseConfirm`,
        message: `Do you want to include a license section?`,
        type: `confirm`,
        default: false
    },
    {
        name:`license`,
        message: `Which license do you wish to choose?`,
        type: `list`,
        choices: [
            `Apache 2.0 License`,
            `Boost Software License 1.0`,
            `BSD 3-Clause License`,
            `BSD 2-Clause License`
        ],
        default: `Apache 2.0 License`,
        when: ({ licenseConfirm }) => {
            if (licenseConfirm) {
              return true;
            } else {
              return false;
            }
        }
    },
    {
        name: `featuresConfirm`,
        message: `Do you want to include a feature's section?`,
        type: `confirm`,
        default: false
    },
    {
        name: `features`,
        message: `Type in your features:`,
        type: `input`,
        when: ({ featuresConfirm }) => {
            if (featuresConfirm) {
              return true;
            } else {
              return false;
            }
        },
        validate: input =>{
            if(input){
                return true
            } else{
                console.log(`Please type in a valid description.`)
                return false
            }
        }
    },
    {
        name: `contribution`,
        message: `Would you like your application to be available to be contributed by other developers?`,
        type: `confirm`,
        default: false
    },
    {
        name: `username`,
        message: `What is your Github username?`,
        type: `input`,
        validate: input =>{
            if(input){
                return true
            } else{
                console.log(`Please type in a valid username.`)
                return false
            }
        }
    },
    {
        name: `emailConfirm`,
        message: `Would you like to provide an e-mail for people to contact you?`,
        type: `confirm`,
        default: false
    },
    {
        name: `email`,
        message: `What is your e-mail?`,
        type: `input`,
        when: ({ emailConfirm }) => {
            if (emailConfirm) {
              return true;
            } else {
              return false;
            }
        },
        validate: input =>{
            if(input){
                return true
            } else{
                console.log(`Please type in a valid e-mail.`)
                return false
            }
        }

    },
    {
        name: `testsConfirm`,
        message: `Would you like to include a tests section?`,
        type: `confirm`,
        default: false
    },
    {
        name: `tests`,
        message: `Input a description for your tests section:`,
        type: `input`,
        when: ({ testsConfirm }) => {
            if (testsConfirm) {
              return true;
            } else {
              return false;
            }
        },
        validate: input =>{
            if(input){
                return true
            } else{
                console.log(`Please type in a valid description.`)
                return false
            }
        }
    }

])

//ReadMe/Program creation 
.then(readmeObject=>{
    if(readmeObject.contribution){
        writeFile(`code_of_conduct.md`, codeConduct)
    }
    return generateMarkdown(readmeObject)
})
.then(readmeText=>{
    return writeFile(`./README.md`,readmeText)
})
.then(response => {
    console.log(response)
})
.catch(err => {
    console.log(err)
})