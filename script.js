const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}

// Function to toggle the dark theme



submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")



//this is table data for pune


// const option = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
//     }
// };

// const puneWeather = (city) => {

//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=pune', option)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             cloud_pcts.innerHTML = response.cloud_pct
//             temps.innerHTML = response.temp
//             feels_likes.innerHTML = response.feels_like
//             humidities.innerHTML = response.humidity
//             min_temps.innerHTML = response.min_temp
//             max_temps.innerHTML = response.max_temp
//             wind_speeds.innerHTML = response.wind_speed
//             wind_degreess.innerHTML = response.wind_degrees
//             sunrises.innerHTML = response.sunrise
//             sunsets.innerHTML = response.sunset
//         })
//         .catch(err => console.error(err));
// }
// puneWeather("Pune")




//this is table data for Mumbai


// const option2 = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
//     }
// };

// const mumbaiWeather = (city) => {

//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, option2)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             cloud_pcts2.innerHTML = response.cloud_pct
//             temps2.innerHTML = response.temp
//             feels_likes2.innerHTML = response.feels_like
//             humidities2.innerHTML = response.humidity
//             min_temps2.innerHTML = response.min_temp
//             max_temps2.innerHTML = response.max_temp
//             wind_speeds2.innerHTML = response.wind_speed
//             wind_degreess2.innerHTML = response.wind_degrees
//             sunrises2.innerHTML = response.sunrise
//             sunsets2.innerHTML = response.sunset
//         })
//         .catch(err => console.error(err));
// }
// mumbaiWeather("Mumbai")



// //this is table data for New york


// const option3 = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
//     }
// };

// const newYorkWeather = (city) => {

//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, option3)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             cloud_pcts3.innerHTML = response.cloud_pct
//             temps3.innerHTML = response.temp
//             feels_likes3.innerHTML = response.feels_like
//             humidities3.innerHTML = response.humidity
//             min_temps3.innerHTML = response.min_temp
//             max_temps3.innerHTML = response.max_temp
//             wind_speeds3.innerHTML = response.wind_speed
//             wind_degreess3.innerHTML = response.wind_degrees
//             sunrises3.innerHTML = response.sunrise
//             sunsets3.innerHTML = response.sunset
//         })
//         .catch(err => console.error(err));
// }
// newYorkWeather("NewYork")



// //this is table data for Chennai


// const option4 = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '2b092066admshbab10c5ee0574f2p1d15cfjsne6a60d83986f',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
//     }
// };

// const chennaiWeather = (city) => {

//     fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, option4)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             cloud_pcts4.innerHTML = response.cloud_pct
//             temps4.innerHTML = response.temp
//             feels_likes4.innerHTML = response.feels_like
//             humidities4.innerHTML = response.humidity
//             min_temps4.innerHTML = response.min_temp
//             max_temps4.innerHTML = response.max_temp
//             wind_speeds4.innerHTML = response.wind_speed
//             wind_degreess4.innerHTML = response.wind_degrees
//             sunrises4.innerHTML = response.sunrise
//             sunsets4.innerHTML = response.sunset
//         })
//         .catch(err => console.error(err));
// }
// chennaiWeather("Chennai")
