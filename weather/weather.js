const request = require('request');
const yargs = require('yargs');

var getWeather = (lat, lang, callback) =>{
  request({
    url: `https://api.darksky.net/forecast/1671501734b09c12ded73416679f9be7/${lat},${lang}`+ `?units=si`,
    json: true
  }, (error,response,body) => {
    if(error){
      calback('Unable to connect forecast.io server');
    }
    else if (response.statusCode === 400) {
      calback('Unable to fetch weather');
    }  else if (response.statusCode === 200) {

      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
        //temperature: body.currently.temperature;
      });
      //console.log(body.currently.temperature);
    }

  });
}

module.exports.getWeather = getWeather;
