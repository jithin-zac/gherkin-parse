# gherkin-parse
[![HitCount](http://hits.dwyl.com/jithin-zachariah/gherkin-parse.svg)](http://hits.dwyl.com/jithin-zachariah/gherkin-parse)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/jithin.zachariah96@gmail.com)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)


`gherkin-parse` is an NPM package designed to convert `.feature` files, commonly used in [Cucumber](https://cucumber.io/) test cases, into JSON objects and vice versa.

## Installation

To install `gherkin-parse`, use the following command:

```bash
npm i gherkin-parse
```

## Usage

To use the package, follow these steps:

```javascript
const parser = require("gherkin-parse");

// Convert a .feature file to a JSON object
const jsonObject = parser.convertFeatureFileToJSON("./sample.feature");

// Convert a JSON object back to a .feature file
const featureFile = parser.convertJSONToFeatureFile(jsonObject);
```

## Example

Consider the following sample feature file:

```
@tag1 @tag2
Feature: Hello world Before Edit
    this is a feature description

    @tag2 @tag3
    Scenario: this is a scenario 1
        Given this is a data
        And this is a given step too
        When this is a when step
        And this is a when step too
        Then it should be a then step
        And it should be a then step too
```

The JavaScript object returned by `convertFeatureFileToJSON` would be:

```json
{
  "type": "GherkinDocument",
  "feature": {
    "type": "Feature",
    "tags": [
      { "name": "@tag1" },
      { "name": "@tag2" }
    ],
    "location": { "line": 2, "column": 1 },
    "language": "en",
    "keyword": "Feature",
    "name": "Hello world Before Edit",
    "description": "    this is a feature description",
    "children": [
      {
        "type": "Scenario",
        "tags": [
          { "name": "@tag2" },
          { "name": "@tag3" }
        ],
        "name": "this is a scenario 1",
        "steps": [
          { "keyword": "Given", "text": "this is a data" },
          { "keyword": "And", "text": "this is a given step too" },
          { "keyword": "When", "text": "this is a when step" },
          { "keyword": "And", "text": "this is a when step too" },
          { "keyword": "Then", "text": "it should be a then step" },
          { "keyword": "And", "text": "it should be a then step too" }
        ]
      }
    ]
  },
  "comments": []
}
```

This JSON object can be used for further processing and modifications. You can convert it back into a feature file string using `convertJSONToFeatureFile`. This string can then be written back to a `.feature` file using Node's `fs` module.

```
@tag1 @tag2
Feature: Hello world After Edit
    this is a feature description

    @tag2 @tag3
    Scenario: this is a scenario 1
        Given this is a data
        And this is a given step too
        When this is a when step
        And this is a when step too
        Then it should be a then step
        And it should be a then step too
```
