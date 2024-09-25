#!/usr/bin/env node

const process = require('process');

// Get command line arguments
const args = process.argv.slice(2);

// Check if a name argument was provided
if (args.length < 1) {
    console.log("Please provide your name.");
    process.exit(1);
}

// Greet the user
const name = args[0];
console.log(`Hello, ${name}! Welcome to my CLI tool.`);
