const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ce849bd62cmsh5d14356a6d4c18cp1182e3jsna4459c466118',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = async (city) => {
    try {
        const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
        const response = await fetch(url, options);
        const result = await response.json();

        // Update HTML elements with weather data
        temp.innerHTML = result.temp;
        temp2.innerHTML = result.temp;
        feels_like.innerHTML = result.feels_like;
        humidity.innerHTML = result.humidity;
        humidity2.innerHTML = result.humidity;
        min_temp.innerHTML = result.min_temp;
        max_temp.innerHTML = result.max_temp;
        wind_speed.innerHTML = result.wind_speed;
        wind_speed2.innerHTML = result.wind_speed;
        wind_degrees.innerHTML = result.wind_degrees;
        sunrise.innerHTML = result.sunrise;
        sunset.innerHTML = result.sunset;

        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

const submit = document.getElementById("submit"); // Get the submit button element
const cityInput = document.getElementById("city"); // Get the city input element
const cityName = document.getElementById("cityName"); // Get the element to display the city name

// Set "Delhi" as the default city name when the page loads
window.addEventListener('load', () => {
    cityInput.value = "Delhi";
    cityName.innerHTML = "Delhi"; // Display "Delhi" as the city name
    getWeather("Delhi");
});

submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const city = cityInput.value; // Get the value entered in the city input
    cityName.innerHTML = city; // Set the cityName element
    getWeather(city); // Pass the city input value to getWeather
});
