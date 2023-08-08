const request = require("request");

const API_KEY = "7caedf1b3939ea5fdc12596eef526423";

const URL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=Faisalabad`;

request({ URL }, () => {});
