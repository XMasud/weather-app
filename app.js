const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.option({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather you',
    string: true
  }
})
.help()
.alias('help', 'h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) =>{
  if (errorMessage){
    console.log(errorMessage);
  } else {
    console.log(results.address);

    weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
      if(errorMessage){
        console.log(errorMessage);
      }else {
        console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature} `);
      }
    });

  }
});

//1671501734b09c12ded73416679f9be7
