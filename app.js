const express = require('express')
const chalk = require('chalk')

// Schema generator: https://jsonschema.net/#/

const app = express()
const port = 3000

const testData = {
  name: 'John Doe',
  age: '30',
  account_balance: '15.5'
}

console.clear()

app.get('/', (req, res) => res.send(testData))
app.listen(port, () => console.log(chalk.green(`Server listening on port ${port}`)))