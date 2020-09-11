# gherkin-parse
NPM package for converting a .feature(cucumber framework) file to a JSON file and vice versa.

## Installation

```npm i gherkin-parse```

## Usage

```
const parser = require("gherkin-parse");

const jsonObject = pasrer.convertFeatureFileToJSON("./sample.feature");

const fetaurefile = parser.convertJSONToFeatureFile(jsonObject);

```

## Example

Consider a sample feature file

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
Javascript object returned by the function would be

```
{ type: 'GherkinDocument',
  feature:
   { type: 'Feature',
     tags: [ [Object], [Object] ],
     location: { line: 2, column: 1 },
     language: 'en',
     keyword: 'Feature',
     name: 'Hello world Before Edit',
     description: '    this is a feature description',
     children: [ [Object] ] },
  comments: [] }
```
This JSON object can be used for further process and edits and we can covert it back to the feature file

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
