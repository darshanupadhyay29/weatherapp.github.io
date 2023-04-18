const option = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    }
};

const puneWeather = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune', option)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pcts.innerHTML = response.cloud_pct
            temps.innerHTML = response.temp
            feels_likes.innerHTML = response.feels_like
            humidities.innerHTML = response.humidity
            min_temps.innerHTML = response.min_temp
            max_temps.innerHTML = response.max_temp
            wind_speeds.innerHTML = response.wind_speed
            wind_degreess.innerHTML = response.wind_degrees
            sunrises.innerHTML = response.sunrise
            sunsets.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
puneWeather("Pune")