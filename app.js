console.log('Starting app.js');

const fs = require('fs'); //call methods containing methods, require nodejs modules
const _ = require('lodash'); //require 3rd party modules

const notes = require('./notes.js'); //reqire own files

var command = process.argv[2]; //enables commands
console.log('Command:', command);

if (command === 'add') {
    console.log('Adding new note');
} else if (command === 'list') {
    console.log('Listing all notes');
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not found');
}