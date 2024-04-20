#! /usr/bin/env node

//Importing inquirer and Chalk pachages
import inquirer from "inquirer";
import chalk from "chalk";

//Display a colourful welcome message
console.log(chalk.bold.italic.underline.cyanBright("\n \t\t Code with Hina - Word Counter"));
console.log("*".repeat(70));

//Prompt the user to enter a sentenced
do {
    const answers = await inquirer.prompt({ name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word",
    });
    const words = answers.sentence.trim().split(' ');
    console.log("*".repeat(70));
    console.log(chalk.bold.italic.underline.greenBright((words)));
    console.log(chalk.bold.italic.underline.magentaBright(`Your sentence words count is ${words.length}`));
    console.log("*".repeat(70));
} while (true);
