const decoratorValidator = (fn, schema, argType) => {
  return async function (event) {
    const data = JSON.parse(event[argType])

    const { error, value } = await schema.validate(data, {
      abortEarly: false
    })

    event[argType] = value

    if (!error) {
      return fn.apply(this, arguments)
    }

    return {
      statusCode: 422,
      body: {
        message: error.message
      }
    }
  }
}

module.exports = {
  decoratorValidator
}
