const { program } = require("commander");
const randomstring = require("randomstring");

program
    .command("rdstr")
    .description("random a string")
    .argument("[length]", "string length", 24)
    .action((length) => {
        console.log(randomstring.generate(parseInt(length)));
        // Example: Access DB_PASSWORD if needed
        if (process.env.DB_PASSWORD) {
            console.log("DB Password is set (not logged for security)");
        }
    });

program
    .command("build")
    .description("Build Electron app on different device")
    .option("--node <node>", "NodeJS version")
    .option("--os <os_name>", "OS name")
    .action((options) => {
        console.log(
            `//--> building Electron app for OS ${options.os} - Node ${options.node}`
        );
    });

program.parse(process.argv);
