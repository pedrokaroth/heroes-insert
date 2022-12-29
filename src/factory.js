const { DynamoDB: { DocumentClient } } = require('aws-sdk')

module.exports = {
  dynamoDB: new DocumentClient()
}
