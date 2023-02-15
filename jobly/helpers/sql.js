const { BadRequestError } = require("../expressError");

// THIS NEEDS SOME GREAT DOCUMENTATION.
/*
@param dataToUpdate - An object containing key-value pairs of data to update in the database
@param jsToSql - This maps the js object to the according sql columns (optional)
@param BadRequestError - if there is nothing in dataToUpdate throw an error saying no data


*/
function sqlForPartialUpdate(dataToUpdate, jsToSql) {
  //this gets the keys from the dataToUpdate file
  const keys = Object.keys(dataToUpdate);
  //makes sure that there is something submitted returns error if not
  if (keys.length === 0) throw new BadRequestError("No data");

  // {firstName: 'Aliya', age: 32} => ['"first_name"=$1', '"age"=$2']
  const cols = keys.map((colName, idx) =>

  //Map the keys to SQL update statements and store in an array
      `"${jsToSql[colName] || colName}"=$${idx + 1}`,
  );
// Returns an object with the SQL update statement and updated values
  return {
    setCols: cols.join(", "),
    values: Object.values(dataToUpdate),
  };
}

module.exports = { sqlForPartialUpdate };
