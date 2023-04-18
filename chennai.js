//this is table data for Chennai


const option4 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    }
};

const chennaiWeather = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, option4)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pcts4.innerHTML = response.cloud_pct
            temps4.innerHTML = response.temp
            feels_likes4.innerHTML = response.feels_like
            humidities4.innerHTML = response.humidity
            min_temps4.innerHTML = response.min_temp
            max_temps4.innerHTML = response.max_temp
            wind_speeds4.innerHTML = response.wind_speed
            wind_degreess4.innerHTML = response.wind_degrees
            sunrises4.innerHTML = response.sunrise
            sunsets4.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
chennaiWeather("Chennai")