# Nocebo Express Error Handler

Handles errors and present errors in JSON format.

## Requirements

Needs harmony to be set when used:

    node --harmony

## Setup

Options:

    jwtSecret: String | Secret to sign JWT with

    schema: String | JSON Schema

Example:

    {
      jwtSecret: "lKTGC6H8hJvgyTKk+h4zyxTUDh55Lm+2oe+TIBZIh8k=",
      schema: {
        "type": "object",
        "properties": {
          "title": {
            "type": "string"
          }
        },
        "required": ["title"]
      }
    }

## Test

To run unit tests:

    npm test
