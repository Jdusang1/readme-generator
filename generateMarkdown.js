function generateMarkdown(data) {
  return `${"Project Title:" + data.title} 
    ${"Usage: " + data.use}
    ${"\n"}
    ${"Description: " + data.why}
    ${"\n"}
    ${"Table Of Contents"}
    ${"1.Installation"}
    ${"2.Usage"}
    ${"3.License"}
    ${"4.Contributions"}
    ${"5.Tests"}
    ${"6.Questions"}
    ${"\n"}
    ${"Installation Instructions: " + data.install}
    ${"\n"}
    ${"How does one use your application: " + data.how}
    ${"\n"}
    ${"Collaborators: " + data.collaborators}
    ${"\n"}
    ${"Licensing: " + data.license}
    ${"\n"}
    ${"Tests: " + data.tests}
    ${"Questions " + data.tests}
    ${data.badge}
  

  `;
}



module.exports = generateMarkdown;