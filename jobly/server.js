"use strict";

const app = require("./app");
const { PORT } = require("./config");

try{
app.listen(PORT, function () {
  console.log(`Started on http://localhost:${PORT}`);
});
}catch(error){
  console.error(`Seems there was an error starting the server: ${error}`)
}