// This imports the sqlForPartialUpdate from the sql.js file
const { sqlForPartialUpdate } = require("./sql");

//Defines a jest test for sqlForPartialUpdate
describe("sqlForPartialUpdate", function () {
    
//Makes a test case with a description "works: 1 item"
  test("works: 1 item", function () {
// Calls the sqlForPartialUpdate function with input values
    const result = sqlForPartialUpdate(
        { f1: "v1" },
        { f1: "f1", fF2: "f2" });
 // Use Jest's expect function to check if the output matches the expected value
    expect(result).toEqual({
      setCols: "\"f1\"=$1",
      values: ["v1"],
    });
  });
//same as the first test but with different values
  test("works: 2 items", function () {
    const result = sqlForPartialUpdate(
        { f1: "v1", jsF2: "v2" },
        { jsF2: "f2" });
    expect(result).toEqual({
      setCols: "\"f1\"=$1, \"f2\"=$2",
      values: ["v1", "v2"],
    });
  });
});
