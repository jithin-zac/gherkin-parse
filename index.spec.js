const {
  convertFeatureFileToJSON,
  convertJSONToFeatureFile,
} = require("./index");
const fs = require("fs");

describe("Feature File Conversion", () => {
  it("should convert feature file to JSON and back to feature", () => {
    let gherkinObject = convertFeatureFileToJSON("./test/before.feature");

    gherkinObject.feature.name = "Hello world After Edit";

    fs.writeFileSync(
      "./test/mock.feature",
      convertJSONToFeatureFile(gherkinObject),
      "utf8"
    );

    expect(fs.readFileSync("./test/mock.feature", "utf8")).toEqual(
      fs.readFileSync("./test/after.feature", "utf8")
    );
  });
});
