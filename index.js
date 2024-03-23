#! /usr/bin/env node
import inquirer from "inquirer";
const Answers = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "Firstnum",
    },
    {
        message: "Enter second number",
        type: "number",
        name: "Secondnum",
    },
    {
        message: "choose operator",
        type: "list",
        name: "operator",
        choices: ["Addition", "Substract", "Multiply", "Division"],
    },
]);
// Conditional Statement
if (Answers.operator === "Addition") {
    console.log(Answers.Firstnum + Answers.Secondnum);
}
else if (Answers.operator === "Substract") {
    console.log(Answers.Firstnum - Answers.Secondnum);
}
else if (Answers.operator === "Multiply") {
    console.log(Answers.Firstnum * Answers.Secondnum);
}
else if (Answers.operator === "Division") {
    console.log(Answers.Firstnum / Answers.Secondnum);
}
else {
    console.log("Please Select Valid Operator");
}
