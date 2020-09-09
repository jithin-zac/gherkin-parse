const assembler = require("gherkin-assembler");
const gherkin = require("gherkin");
const fs = require("fs");
const parser = new gherkin.Parser();

const convertFeatureFileToJSON = (featureFilePath) => {
  try {
    const data = parser.parse(fs.readFileSync(featureFilePath, "utf8"));
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const convertJSONToFeatureFile = (jsonObject) => {
  try {
    const document = assembler.objectToAST(jsonObject);
    return assembler.format(document);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  convertFeatureFileToJSON,
  convertJSONToFeatureFile,
};
