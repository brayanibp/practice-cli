#!/usr/bin/env node

import { Command } from "commander";

// Declare the program

const program = new Command();

// Add actions onto that CLI

program
  .argument("<string>", "string to long")
  .option("-c, --capitalize", "Capitalize the message")
  .action(
    (
      message: string, 
      opts: {
        capitalize?: boolean;
      }
    ) => {
      if (opts.capitalize) {
        console.log(message.toUpperCase());
      }
      else {
        console.log(message);
      }
    }
  )
  .description("Print a message");

program
  .command("add <number...>")
  .action((numbers: string[]) => {
    const total = numbers.reduce((a, v) => Number(a) + Number(v), 0);
    console.log(`Total: ${total}`);
  })
  .description("Add numbers and log the total");

program
  .command("get-max-number <number...>")
  .action((numbers: number[])=>{
    const max = Math.max(...numbers);
    console.log(`Max: ${max}`);
  })
  .description("Get the higher number due a list of given number");

// Excute the CLI with the given arguments

program.parse(process.argv);