const assembler = require("gherkin-assembler");
const gherkin = require("gherkin");
const fs = require("fs");
const parser = new gherkin.Parser();

const convertFeatureFileToJSON = (featureFilePath) => {
  return new Promise((resolve, reject) => {
    try {
      const data = parser.parse(fs.readFileSync(featureFilePath, "utf8"));
      resolve(data);
    } catch (error) {
      reject(new Error(error));
    }
  });
};

const convertJSONToFeatureFile = (jsonObject) => {
  return new Promise((resolve, reject) => {
    try {
      const document = assembler.objectToAST(jsonObject);
      resolve(assembler.format(document));
    } catch (error) {
      reject(new Error(error));
    }
  });
};

module.exports = {
  convertFeatureFileToJSON,
  convertJSONToFeatureFile,
};
