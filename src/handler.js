const { randomUUID } = require('node:crypto')
const joi = require('joi')

class Handler {
  constructor ({
    dynamoDB
  }) {
    this.dynamoDB = dynamoDB
    this.table = 'Heroes'
  }

  static validator () {
    return joi.object({
      name: joi.string().min(2).max(50).required(),
      power: joi.string().min(2).max(50).required()
    })
  }

  async insert (event) {
    const item = this.#prepareData(event.body)

    await this.dynamoDB.put(item).promise()

    const insertedItem = await this.dynamoDB.query({
      TableName: 'Heroes',
      ExpressionAttributeValues: {
        ':id': item.Item.id
      },
      KeyConditionExpression: 'id = :id'
    }).promise()

    return {
      statusCode: 200,
      body: insertedItem.Items
    }
  }

  #prepareData (data) {
    return {
      TableName: this.table,
      Item: {
        id: randomUUID(),
        created_at: new Date().toISOString(),
        ...data
      }
    }
  }
}

module.exports = Handler
