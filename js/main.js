import { format } from 'date-fns'

// Хранилище имен (Модуль)
const cityNow = document.querySelector('.city-now');
const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
const serverUrlWeather = 'http://api.openweathermap.org/data/2.5/weather';
const serverUrlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
const clearInput = '';

const parentCitysContainer = document.querySelector('.added-cities_list');
const temperatureNow = document.querySelector('.weather-now');
const detailsTitle = document.querySelector('.details-title');
const parameterTemperature = document.querySelector('.parameter-temperature');
const parameterFeelsLike = document.querySelector('.parameter-Feels-like');
const parameterWeather = document.querySelector('.parameter-weather');
const parameterSunrise = document.querySelector('.parameter-sunrise');
const parameterSunset = document.querySelector('.parameter-sunset');
const forecastTitle = document.querySelector('.forecast-title');
const forecastParent = document.querySelector('.forecast-section');

const cityQuery = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const likeButton = document.querySelector('.like-img');
///////////////////////////


const list = [];
let favouriteCities = new Set();
const lastCheckedCity = [];


likeButton.addEventListener('click', () => {
    favouriteCities.add(list[list.length - 1]);
});

likeButton.addEventListener('click', renderCityList);

cityQuery.addEventListener('submit', () => {
    let cityName = document.querySelector('.search-input').value;
    const urlWeather = `${serverUrlWeather}?q=${cityName}&appid=${apiKey}`; 

    fetch(urlWeather)
    .then(responce => responce.json())
    .then(weatherNow => {
        if (weatherNow.cod === '404') {
            searchInput.value = clearInput;
            alert('Такого города нет');
            throw new Error('Ошибка сервера №404');
        } else if (weatherNow.cod === 401) {
            searchInput.value = clearInput;
            alert('Что то пошло не так');
            throw new Error('Ошибка сервера №401');
        } else if (weatherNow.cod === '400') {
            alert('Введите название города!');
            throw new Error('Ошибка сервера №400');
        } else {
            list.push(weatherNow.name);
            showWeatherNow(weatherNow)
        }
    })
    .catch(console.error);
})


function findLastCity() {
    let cityName = lastCheckedCity[0];
    const urlWeather = `${serverUrlWeather}?q=${cityName}&appid=${apiKey}`; 

    fetch(urlWeather)
    .then(responce => responce.json())
    .then(weatherNow => {
        showWeatherNow(weatherNow)
        showWeatherDetails(weatherNow)
    })
    .catch(console.error);
}

function findForecast(){
    cityName = lastCheckedCity[lastCheckedCity.length - 1];
    const urlForecast = `${serverUrlForecast}?q=${cityName}&appid=${apiKey}`; 

    fetch(urlForecast)
    .then(responce => responce.json())
    .then(weatherForecast => {
        showForecast(weatherForecast)
    })
    .catch(console.error);
}


function findSavedForecast(){
    cityName = lastCheckedCity[0];
    const urlForecast = `${serverUrlForecast}?q=${cityName}&appid=${apiKey}`; 

    fetch(urlForecast)
    .then(responce => responce.json())
    .then(weatherForecast => {
        showForecast(weatherForecast)
    })
    .catch(console.error);
}


function showWeatherNow(weatherNow) {
    cityNow.textContent = weatherNow.name;
    temperatureNow.textContent = Math.round(weatherNow.main.temp - 273) + '°';
    searchInput.value = clearInput;
}


function showWeatherDetails(weatherNow) {

    detailsTitle.textContent = weatherNow.name;
    parameterTemperature.textContent = `Temperature: ${Math.round(weatherNow.main.temp - 273) + '°'}`;
    parameterFeelsLike.textContent = `Feels like: ${Math.round(weatherNow.main.feels_like  - 273) + '°'}`;
    parameterWeather.textContent = `Weather: ${weatherNow.weather[0].description}`;

    let sunriseTime = weatherNow.sys.sunrise;
    let sunriseConverted =  format(new Date(1000 * sunriseTime), 'kk:mm');
    parameterSunrise.textContent = `Sunset: ${sunriseConverted}`;

    let sunsetTime = weatherNow.sys.sunset;
    let sunsetConverted = format(new Date(1000 * sunsetTime), 'kk:mm');
    parameterSunset.textContent = `Sunset: ${sunsetConverted}`;
}


function renderCityList() {
    clearOldCitys()
    addLocation()
}

function renderForecast() {
    clearOldForecast()
    findForecast()
}

function clearOldCitys() {  
    let deleteOldCitys = document.querySelectorAll('.added-city_container'); 
    if (deleteOldCitys) {
        deleteOldCitys.forEach(OldCitys => OldCitys.remove()); 
    } else {
        return
    }
}

function clearOldForecast() {  
    let deleteOldForecast = document.querySelectorAll('.forecast-parametres'); 
    if (deleteOldForecast) {
        deleteOldForecast.forEach(OldForecast => OldForecast.remove());
    } else {
        return
    }
}

async function addLocation() {

    let arrayFavouriteCities = Array.from(favouriteCities);
    addFavouriteStorage(arrayFavouriteCities)

    for (let i = 0; i < arrayFavouriteCities.length; i++) {

        const cityName = arrayFavouriteCities[i];
        const urlWeather = `${serverUrlWeather}?q=${cityName}&appid=${apiKey}`; 

        const responce = await fetch(urlWeather)
        const weatherNow = await responce.json()

        showWeatherNow(weatherNow)

        // Добавить город в список избранных
        const newCityContainer = document.createElement('div');
        parentCitysContainer.appendChild(newCityContainer);
        newCityContainer.classList.add('added-city_container');

        newCityContainer.innerHTML = '<svg class="img-delete-city" width="24" height="24"><path d="M12 12.293l5.657-5.657a.5.5 0 0 1 .707.707L12.707 13l5.657 5.657a.5.5 0 1 1-.707.707L12 13.707l-5.657 5.657a.5.5 0 1 1-.707-.707L11.293 13 5.636 7.343a.5.5 0 1 1 .707-.707L12 12.293z" fill="#979797"/></svg>';

        const newCityName = document.createElement('p');
        newCityContainer.appendChild(newCityName);
        newCityName.textContent = weatherNow.name;
        newCityName.classList.add('added-city_name');

        const buttonDelete = document.createElement('button');
        buttonDelete.classList.add('button-delete');
        newCityContainer.appendChild(buttonDelete);

        // Удалить город
        buttonDelete.addEventListener('click', () => {
            favouriteCities.delete(arrayFavouriteCities[i]);
            renderCityList()           
        });

        // Показать погоду избранного города
        newCityName.addEventListener('click', () => {

            lastCheckedCity.push(weatherNow.name);
            
            addCheckedStorage(lastCheckedCity)
            showWeatherDetails(weatherNow)
            showWeatherNow(weatherNow)
            renderForecast()            
        });    
    }
}


function showForecast(weatherForecast) {

    for (let repeat = 0; repeat < 40; repeat++) {

        forecastTitle.textContent = weatherForecast.city.name;

        const forecastParametres = document.createElement('div');
        forecastParent.appendChild(forecastParametres);
        forecastParametres.classList.add('forecast-parametres'); 

        const forecastDate = document.createElement('div');
        forecastParametres.appendChild(forecastDate);
        forecastDate.classList.add('forecast-date');

        const futureDate = document.createElement('span');
        forecastDate.appendChild(futureDate);
        futureDate.classList.add('future-date');

        const futureforecastDate = weatherForecast.list[repeat].dt; 
        const futureDateConverted = format(new Date(1000 * futureforecastDate), 'd MMMM');
        futureDate.textContent = futureDateConverted;

        const futureTime = document.createElement('span');
        forecastDate.appendChild(futureTime);
        futureTime.classList.add('future-time');

        const futureTimeConverted = format(new Date(1000 * futureforecastDate), 'kk:mm');;
        futureTime.textContent = futureTimeConverted;

        const forecastTemperaturePrecipitation = document.createElement('div');
        forecastParametres.appendChild(forecastTemperaturePrecipitation);
        forecastTemperaturePrecipitation.classList.add('forecast-temperature-precipitation');

        const forecastTemperature = document.createElement('span');
        forecastTemperaturePrecipitation.appendChild(forecastTemperature);
        forecastTemperature.classList.add('forecast-temperature');
        forecastTemperature.textContent = `Temperature: ${Math.round(weatherForecast.list[repeat].main.temp - 273) + '°'}`; 

        const forecastPrecipitation = document.createElement('span');
        forecastTemperaturePrecipitation.appendChild(forecastPrecipitation);
        forecastPrecipitation.classList.add('forecast-precipitation');
        forecastPrecipitation.textContent = weatherForecast.list[repeat].weather[0].main; 

        const forecastFeelsLike = document.createElement('div');
        forecastParametres.appendChild(forecastFeelsLike);
        forecastFeelsLike.classList.add('forecast-feels-like');

        const feelsLike = document.createElement('span');
        forecastFeelsLike.appendChild(feelsLike);
        feelsLike.classList.add('feels-like');
        feelsLike.textContent = `Feels like: ${Math.round(weatherForecast.list[repeat].main.feels_like - 273) + '°'}`; 
    }
}


function addFavouriteStorage(arrayFavouriteCities) {
    localStorage.setItem("arrayFavouriteCities", JSON.stringify(arrayFavouriteCities));
}

function addCheckedStorage(lastCheckedCity) {
    localStorage.setItem("lastCheckedCity", JSON.stringify(lastCheckedCity[lastCheckedCity.length - 1])); 
}

function showSavedParavetres() {
    let storageFavouriteCities = JSON.parse(localStorage.getItem("arrayFavouriteCities"));
    favouriteCities = new Set(storageFavouriteCities);

    let storageCheckedCity = JSON.parse(localStorage.getItem("lastCheckedCity"));
    lastCheckedCity.push(storageCheckedCity);

    if (favouriteCities.size != 0) {
        renderCityList()
    } else if (lastCheckedCity[0] != null) {
        findSavedForecast()
        findLastCity()
    }
}

showSavedParavetres()


// Функция проверка
// const check = document.querySelector('.added-citys_title');
// function checkAnything() {
    // console.log(list);
    // console.log(lastCheckedCity);
    // console.log(favouriteCities);
    // console.log(localStorage);
    // localStorage.clear()
// }
// check.addEventListener('click', checkAnything);