const { dynamoDB } = require('./factory')
const Handler = require('./handler')
const { decoratorValidator } = require('./util')
const handler = new Handler({ dynamoDB })

const insert = decoratorValidator(
  handler.insert.bind(handler),
  Handler.validator(),
  'body'
)

const trigger = async (event) => {
  console.log('****trigger', JSON.stringify(event))
}

module.exports = {
  insert,
  trigger
}
