const apiKey = "253fb7580c920c8f18d7b8685e72fee7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const cityInput = document.querySelector(".search-input")
const searchBtn = document.querySelector(".search-icon")
const weatherIcon = document.querySelector(".weather-icon")

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
        document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";    

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png" 
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Humidity"){
        weatherIcon.src = "images/humidity.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png"
    }
    else{
        weatherIcon.src = "images/wind.png"
    }
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

    
    


}

searchBtn.addEventListener("click", ()=>{
    getWeather(cityInput.value);
})


