#!/usr/bin/env node

import { Command } from "commander";

// Declare the program

const program = new Command();

// Add actions onto that CLI

program
  .action(()=>{
    console.log("Hello!");
  })
  .description("Say Hello");

// Excute the CLI with the given arguments

program.parse(process.argv);