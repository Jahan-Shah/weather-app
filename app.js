const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) console.log("Please enter address/valid address");
else
  forecast(address, (error, { location, status }) => {
    error ? console.log("Error", error) : console.log(location + "\n" + status);
  });
