[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jithin-zachariah_gherkin-parse&metric=alert_status)](https://sonarcloud.io/dashboard?id=jithin-zachariah_gherkin-parse)
[![HitCount](http://hits.dwyl.com/jithin-zachariah/gherkin-parse.svg)](http://hits.dwyl.com/jithin-zachariah/gherkin-parse)
[![Say Thanks!](https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg)](https://saythanks.io/to/jithin.zachariah96@gmail.com)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
# gherkin-parse
NPM package for converting a .feature file ([cucumber](https://cucumber.io/) test cases) to a JSON object and vice versa.


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
This JSON object can be used for further process and edits and we can covert it back to the feature file string which could be used to write back to the feature file using the FS module

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
