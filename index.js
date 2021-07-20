
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}



const weatherApi = 
{
    key : "a9efa99c94f6ded0006d4b59f68b2d78 ", 
    baseUrl : "http://api.openweathermap.org/data/2.5/weather?" 
}

// Add event listener on pressing enter key

const searchInputBox = document.getElementById('input-box');

searchInputBox.addEventListener( 'keypress' , (event) => { 

    if(event.keyCode == 13)
    {
        console.log(searchInputBox.value);
        getWeather(searchInputBox.value);
    }

});

// Fetch weather data from API

function getWeather(city) 
{
fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}`).then( weather =>
    {
         return weather.json();
    }).then(showWeatherReport) ;

}


// Show weather 

function showWeatherReport(weather)
{
      console.log(weather);

      let city = document.getElementById('city');
      city.innerText =`${weather.name} , ${weather.sys.country}`; //(5/9) * (F - 32)

      let temprature = document.getElementById('temp');
      temprature.innerHTML = `${Math.round(weather.main.temp- 273.15)}&deg;C`;

      let minMaxTemp = document.getElementById('min-max');

minMaxTemp.innerHTML =  `${Math.floor(weather.main.temp_min- 273.15)}&deg;C(min)/${Math.ceil(weather.main.temp_max- 273.15)}&deg;C(max)`;

    let weatherType = document.getElementById('weather');

    weatherType.innerText = `${weather.weather[0].main}`;

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('./images/clear.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('./images/cloud.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('./images/cloud.jpg')";
        
    }     else if(weatherType.textContent == 'Rain') {
        console.log("rain");
        document.body.style.backgroundImage = "url('./images/rain.jpg')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('./images/snow.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage =" url('./images/thunderstorm.jpg')";
        
    } 

    let date = document.getElementById('date');

    todayDate = new Date();

    date.innerText = dateManage(todayDate);

      
}

// Get the date 

function dateManage (dateArg)
{
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
