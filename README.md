<!--
title: 'AWS NodeJS Example'
description: 'This template demonstrates how to deploy a NodeJS function running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->


# Receiving database events from an insert

This repository shows an example of an application that executes a trigger when performing an insert in dynamodb.

## Usage

### Deployment

In order to deploy the example, you need to run the following command:

```
$ serverless deploy
```

### Invocation

After successful deployment, you can invoke the deployed function by using the following command:

```bash
npm run insert
```

Which should result in response similar to the following:

```json
{
    "statusCode": 200,
    "body": [
        {
            "created_at": "2022-12-29T01:12:33.656Z",
            "id": "88dbe52d-0a60-4259-bd9f-32381fe07e81",
            "name": "Batman",
            "power": "Rich"
        }
    ]
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
npm run insert-local
```

Which should result in response similar to the following:

```
{
    "statusCode": 200,
    "body": [
        {
            "created_at": "2022-12-29T01:12:33.656Z",
            "id": "88dbe52d-0a60-4259-bd9f-32381fe07e81",
            "name": "Batman",
            "power": "Rich"
        }
    ]
}
```
