function generateMarkdown(data) {
  return `![GitHub] 
  https://img.shields.io/badge/license-${data.license}-blue.svg
  
  # ${data.title} 
    
  ## Use
  ${data.use}
    
  ## Why
  ${data.why}
    
    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Collaborators](#collaborators)
    * [License](#license) 
    * [Tests](#tests) 
    * [Questions](#questions)

  ## Installation:
    ${data.install}
  
  ## Usage
    ${data.how}
  
  ## Collaborators
    ${data.collaborators}

  ## Licensing
    This project is covered by a (https://opensource.org/licenses/${data.license})
  
  ## Tests
    ${data.tests}
  
  ## Questions
    
  https://github.com/${data.github}
    
  ${data.email}`

    ;

};



module.exports = generateMarkdown;