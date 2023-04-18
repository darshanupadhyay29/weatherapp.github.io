//this is table data for New york


const option3 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    }
};

const newYorkWeather = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, option3)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pcts3.innerHTML = response.cloud_pct
            temps3.innerHTML = response.temp
            feels_likes3.innerHTML = response.feels_like
            humidities3.innerHTML = response.humidity
            min_temps3.innerHTML = response.min_temp
            max_temps3.innerHTML = response.max_temp
            wind_speeds3.innerHTML = response.wind_speed
            wind_degreess3.innerHTML = response.wind_degrees
            sunrises3.innerHTML = response.sunrise
            sunsets3.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
newYorkWeather("New York")