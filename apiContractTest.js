const newman = require('newman')

// https://learning.getpostman.com/docs/postman/collection_runs/command_line_integration_with_newman/

console.clear()

newman.run({
    collection: require('./APIContractTest.postman_collection.json'),
    reporters: 'cli'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!')
})