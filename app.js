const chalk = require('chalk'),
yargs = require('yargs'), 
getNotes = require('./notes');

// customize yargs version
yargs.version('1.1.0');

// add, remove, read, list Command config

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function() {
        console.log('adding a new note');
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('removing a note');
    }
})

// create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log('Listing all your notes');
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'Read all notes',
    handler: function() {
        console.log('Reading a note');
    }
})

console.log(yargs.argv);