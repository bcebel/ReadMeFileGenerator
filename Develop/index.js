
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

const inquirer = require("inquirer");
const fs = require("fs");
let badger;

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter Title",
      name: "title",
    },
    {
      type: "input",
      message: "Description",
      name: "description",
    },
    {
      type: "checkbox",
      message: "Table of Contents",
      name: "toc",
      choices: ["- [Installation](#installation)\r\r"
      ,"- [Usage](#usage)\r\r"
      ,"- [Credits](#credits)\r\r"
      ,"- [License](#license)\r\r"],
    },
    {
      type: "input",
      message: "Installation",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage",
      name: "usage",
    },
    {
      type: "checkbox",
      message: "License",
      name: "license",
      choices: [
        "AGPL v3",
        "Artistic-2.0",
        "The Perl License",
        "CC BY 4.0",
        "CC BY-NC 4.0",
        "CC BY-NC-ND 4.0",
        "CC BY-NC-SA 4.0",
        "CC BY-ND 4.0",
        "CC BY-SA 4.0",
        "CC0-1.0",
        "FDL 1.3",
        "GPL v2",
        "GPL v3",
        "IPL 1.0",
        "ISC",
        "LGPL v3",
        "MIT",
        "MPL 2.0",
        "ODbL",
        "ODbL",
        "Open Data Commons Attribution",
        "Open Font-1.1",
        "Unlicense",
        "WTFPL",
        "Zlib",
        "Apache 2.0",
        "Boost1.0",
        "BSD-2",
        "BSD-3",
        "EPL1.0",
      ],
    },
    {
      type: "input",
      message: "Contributing",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests",
      name: "tests",
    },
    {
      message: "Please enter your email",
      name: "email",
      type: "input",
      default: () => {},
      validate: function (email) {

          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

          if (valid) {
              return true;
          } else {
              console.log(".  Please enter a valid email")
              return false;
          }
      }
    },
  ])
  .then((response) => {
    const joinedtoc=response.toc.join('\r');
    const expr = response.license;
    console.log(expr);
    switch (expr.toString()) {
      case "AGPL v3":
        badger =
          "![License](https://img.shields.io/badge/License-AGPL_v3-blue.svg)";
        break;
      case "Artistic-2.0":
        badger =
          "![License](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)";
        break;
      case "The Perl License":
        badger =
          "![License](https://img.shields.io/badge/License-Perl-0298c3.svg)";
        break;
      case "CC BY 4.0":
        badger =
          "![License](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)";
        break;
      case "CC BY-NC 4.0":
        badger =
          "![License](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)";
        break;
      case "CC BY-NC-ND 4.0":
        badger =
          "![License](https://img.shields.io/badge/License-CC_BY--NC--ND_4.0-lightgrey.svg)";
        break;
      case "CC BY-NC-SA 4.0":
        badger =
          "![License](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)";
        break;
      case "CC BY-ND 4.0":
        badger =
          "![License](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)";
        break;
      case "CC BY-SA 4.0":
        badger =
          "![License](https://img.shields.io/badge/License-CC_BY--SA_4.0-lightgrey.svg)";
        break;
      case "CC0-1.0":
        badger =
          "![License](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)";
        break;
      case "FDL 1.3":
        badger =
          "![License](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)";
        break;
      case "GPL v2":
        badger =
          "![License](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
        break;
      case "GPL v3":
        badger =
          "![License](https://img.shields.io/badge/License-GPLv3-blue.svg)";
        break;
      case "IPL 1.0":
        badger =
          "![License](https://img.shields.io/badge/License-IPL_1.0-blue.svg)";
        break;
      case "ISC":
        badger =
          "![License](https://img.shields.io/badge/License-ISC-blue.svg)";
        break;
      case "LGPL v3":
        badger =
          "![License](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
        break;
      case "MIT":
        badger =
          "![License](https://img.shields.io/badge/License-MIT-yellow.svg)";
        break;
      case "MPL 2.0":
        badger =
          "![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)";
        break;
      case "ODbL":
        badger =
          "![License](https://img.shields.io/badge/License-ODbL-brightgreen.svg)";
        break;
      case "ODbL":
        badger =
          "![License](https://img.shields.io/badge/License-PDDL-brightgreen.svg)";
        break;
      case "Open Data Commons Attribution":
        badger =
          "![License](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)";
        break;
      case "Open Font-1.1":
        badger =
          "![License](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)";
        break;
      case "Unlicense":
        badger =
          "![License](https://img.shields.io/badge/license-Unlicense-blue.svg)";
        break;
      case "WTFPL":
        badger =
          "![License](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)";
        break;
      case "Zlib":
        badger =
          "![License](https://img.shields.io/badge/License-Zlib-lightgrey.svg)";
        break;
      case "Apache 2.0":
        badger =
          "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
        break;
      case "Boost1.0":
        badger =
          "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
        break;
      case "BSD-2":
        badger =
          "![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)";
        break;
      case "BSD-3":
        badger =
          "![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)";
        break;
      case "EPL1.0":
        badger =
          "![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
        break;
    }
    console.log(badger);
    fs.appendFile(
      "readme.md",
      `# ${response.title}  \r\r
## Description\r\r${response.description}\r\r
## Table of Contents\r\r${joinedtoc}\r\r
## Installation\r\r${response.installation}\r\r
## Usage\r\r${response.usage}\r\r
## License\r\r${response.license}\r\r${badger}\r\r
## Contributing\r\r${response.contributing}\r\r
## Tests\r\r${response.tests}\r\r
## Questions\r\rEmail me at ${response.email} if you have any questions.` ,
      (err) => (err ? console.error(err) : console.log("Commit logged!"))
    );
  });
