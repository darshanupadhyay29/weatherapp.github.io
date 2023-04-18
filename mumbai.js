//this is table data for Mumbai


const option2 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    }
};

const mumbaiWeather = (city) => {

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, option2)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pcts2.innerHTML = response.cloud_pct
            temps2.innerHTML = response.temp
            feels_likes2.innerHTML = response.feels_like
            humidities2.innerHTML = response.humidity
            min_temps2.innerHTML = response.min_temp
            max_temps2.innerHTML = response.max_temp
            wind_speeds2.innerHTML = response.wind_speed
            wind_degreess2.innerHTML = response.wind_degrees
            sunrises2.innerHTML = response.sunrise
            sunsets2.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
mumbaiWeather("Mumbai")