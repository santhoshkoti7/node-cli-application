import inquirer from "inquirer";
import handler from "./command.js";

const initInteraction = () => {
  const questions = [
    {
      name: "command",
      type: "input",
      message: "Enter Command to interact",
    },
  ];
  return inquirer.prompt(questions);
};

const run = async () => {
  while (true) {
    const { command } = await initInteraction();
    handler(command);
  }
};

run();
