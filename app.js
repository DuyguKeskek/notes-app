console.log('Starting app.js');

const fs = require('fs'); //call methods containing methods, require nodejs modules
const _ = require('lodash'); //require 3rd party modules
const yargs = require('yargs');

const notes = require('./notes.js'); //reqire own files

const argv = yargs.argv; //key-value pairs
var command = process.argv[2]; //parse command line arguments
console.log('Command:' + command);
console.log('Process', process.argv);
console.log('Yargs', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    notes.removeNote(argv.title);
} else {
    console.log('Command not found');
}