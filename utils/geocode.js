const request = require("request");

module.exports = geocode = (address, callback) => {
  const TOKEN_ACCESS =
    "pk.eyJ1IjoiamFiYWppbCIsImEiOiJjbGxidjlvbmowY3M3M2NxczVvZ3B0NW15In0.TuuJhf1qqlK2puhls7S2hg";
  const GEO_URL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${TOKEN_ACCESS}&limit=1`;

  request({ url: GEO_URL, json: true }, (err, { body }) => {
    if (err) callback("Unable to connect to location service!", undefined);
    else if (body.features.length <= 0)
      callback("Unable to find location, Try another search", undefined);
    else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
};
