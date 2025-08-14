const apiKey = "253fb7580c920c8f18d7b8685e72fee7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=raipur";
const cityInput = document.querySelector(".search-input")
const searchBtn = document.querySelector("search-icon")


async function getWeather(city) {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;



    
}
getWeather();

function displayWeather(data) {
    
}

function name(params) {
    
}
