const core = require("@actions/core");
const github = require("@actions/github");

const firstGreeting = core.getInput("first-greeting");
const secondGreeting = core.getInput("second-greeting");
const thirdGreeting = core.getInput("third-greeting");
const lastOneGreeted = core.getInput("last-one-greeting");

async function run() {
    try {
        if (firstGreeting) {
            core.setOutput("last-one-greeting", firstGreeting);
        } else if (secondGreeting) {
            core.setOutput("last-one-greeting", secondGreeting);
        } else if (thirdGreeting) {
            core.setOutput("last-one-greeting", thirdGreeting);
        }
    } catch (error) {
      core.setFailed(error.message);
    }
}

run();
console.log(`The first one to be greeted was ${firstGreeting}!`);
console.log(`The second one to be greeted was ${secondGreeting}!`);
console.log(`The last one to be greeted was ${thirdGreeting}!`);
