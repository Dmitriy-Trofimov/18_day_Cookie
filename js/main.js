import { format } from 'date-fns'

let cityQuery = document.querySelector('.search-form');
let searchInput = document.querySelector('.search-input');
let likeButton = document.querySelector('.like-img');
let list = [];
let lastCheckedCity = [];
let listForecast = [];
let lastCheckedForecast = [];

cityQuery.addEventListener('submit', findCity);
likeButton.addEventListener('click', render);


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
///////////////////////////



function findCity() {
    const cityName = document.querySelector('.search-input').value;
    const urlWeather = `${serverUrlWeather}?q=${cityName}&appid=${apiKey}`; 
    const urlForecast = `${serverUrlForecast}?q=${cityName}&appid=${apiKey}`; 

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
            cityNow.textContent = weatherNow.name;  
            list.push(weatherNow);
        }
    })
    .catch(console.error);

    findForecast(urlForecast)
}


function findForecast(urlForecast){

    fetch(urlForecast)
    .then(responce => responce.json())
    .then(weatherForecast => {
        if (weatherForecast.cod === '404') {
            searchInput.value = clearInput;
            alert('Такого города нет');
            throw new Error('Ошибка сервера №404');
        } else if (weatherForecast.cod === 401) {
            searchInput.value = clearInput;
            alert('Что то пошло не так');
            throw new Error('Ошибка сервера №401');
        } else {
            listForecast.push(weatherForecast);
            searchInput.value = clearInput;
        }
    })
    .catch(console.error);
}

function render() {
    clearOldCitys()
    clearOldForecast()
    addLocation()
    addListStorage()
    addForecastStorage()
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


function addLocation(i) {    

    for (let i=0; i<list.length; i++) {

        // Добавить город справа
        const newCityContainer = document.createElement('div');
        parentCitysContainer.appendChild(newCityContainer);
        newCityContainer.classList.add('added-city_container');

        newCityContainer.innerHTML = '<svg class="img-delete-city" width="24" height="24"><path d="M12 12.293l5.657-5.657a.5.5 0 0 1 .707.707L12.707 13l5.657 5.657a.5.5 0 1 1-.707.707L12 13.707l-5.657 5.657a.5.5 0 1 1-.707-.707L11.293 13 5.636 7.343a.5.5 0 1 1 .707-.707L12 12.293z" fill="#979797"/></svg>';

        const newCityName = document.createElement('p');
        newCityContainer.appendChild(newCityName);
        newCityName.textContent = list[i].name;
        newCityName.classList.add('added-city_name');

        // Кнопка удалить
        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('button-delete');
        newCityContainer.appendChild(buttonDelete);

        buttonDelete.addEventListener('click', () => {
            let indexListCity = list.findIndex(indexCity => indexCity.name ===  newCityName.textContent);
            let deleteObjectCity = list.splice(indexListCity, 1);

            let indexlistForecast = listForecast.findIndex(listForecast => listForecast.name ===  newCityName.textContent);
            let deleteObjectForecast = listForecast.splice(indexlistForecast, 1);

            render()
        });

        // Отобразить параметры по клику на город страва
        newCityName.addEventListener('click', showCityParameter);

        // showCityParameter(i)

        console.log(i);
        
    }
    return i;

}

console.log(addLocation());

function showCityParameter(i) {

    alert('dfdfd')
    cityNow.textContent = list[i].name;
    temperatureNow.textContent = Math.round(list[i].main.temp - 273) + '°';

    lastCheckedCity.push(list[i]);
    lastCheckedForecast.push(listForecast[i]);


    // Таб с деталями

    detailsTitle.textContent = lastCheckedCity[lastCheckedCity.length - 1].name;
    parameterTemperature.textContent = `Temperature: ${Math.round(lastCheckedCity[lastCheckedCity.length - 1].main.temp - 273) + '°'}`;
    parameterFeelsLike.textContent = `Feels like: ${Math.round(lastCheckedCity[lastCheckedCity.length - 1].main.feels_like  - 273) + '°'}`;
    parameterWeather.textContent = `Weather: ${lastCheckedCity[lastCheckedCity.length - 1].weather[0].description}`;

    let sunriseTime = lastCheckedCity[lastCheckedCity.length - 1].sys.sunrise;
    let sunriseConverted =  format(new Date(1000 * sunriseTime), 'kk:mm');
    parameterSunrise.textContent = `Sunset: ${sunriseConverted}`;

    let sunsetTime = lastCheckedCity[lastCheckedCity.length - 1].sys.sunset;
    let sunsetConverted = format(new Date(1000 * sunsetTime), 'kk:mm');
    parameterSunset.textContent = `Sunset: ${sunsetConverted}`;

    addCheckedStorage()
    addCheckedForecast()   
    clearOldForecast()         
    showForecast()
}








function showForecast() {

    for (let repeat = 0; repeat < 40; repeat++) {

    forecastTitle.textContent = lastCheckedForecast[lastCheckedForecast.length - 1].city.name; 


    const forecastParametres = document.createElement('div');
    forecastParent.appendChild(forecastParametres);
    forecastParametres.classList.add('forecast-parametres'); 


    const forecastDate = document.createElement('div');
    forecastParametres.appendChild(forecastDate);
    forecastDate.classList.add('forecast-date');

    const futureDate = document.createElement('span');
    forecastDate.appendChild(futureDate);
    futureDate.classList.add('future-date');

    const futureforecastDate = lastCheckedForecast[lastCheckedForecast.length - 1].list[repeat].dt; 
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
    forecastTemperature.textContent = `Temperature: ${Math.round(lastCheckedForecast[lastCheckedForecast.length - 1].list[repeat].main.temp - 273) + '°'}`; 

    const forecastPrecipitation = document.createElement('span');
    forecastTemperaturePrecipitation.appendChild(forecastPrecipitation);
    forecastPrecipitation.classList.add('forecast-precipitation');
    forecastPrecipitation.textContent = lastCheckedForecast[lastCheckedForecast.length - 1].list[repeat].weather[0].main; 


    const forecastFeelsLike = document.createElement('div');
    forecastParametres.appendChild(forecastFeelsLike);
    forecastFeelsLike.classList.add('forecast-feels-like');

    const feelsLike = document.createElement('span');
    forecastFeelsLike.appendChild(feelsLike);
    feelsLike.classList.add('feels-like');
    feelsLike.textContent = `Feels like: ${Math.round(lastCheckedForecast[lastCheckedForecast.length - 1].list[repeat].main.feels_like - 273) + '°'}`; 
    }
}

function addListStorage() {
    localStorage.setItem("list", JSON.stringify(list)); 
}

function addForecastStorage() {
    localStorage.setItem("listForecast", JSON.stringify(listForecast)); 
}

function addCheckedStorage() {
    localStorage.setItem("lastCheckedCity", JSON.stringify(lastCheckedCity));
}

function addCheckedForecast() {
    localStorage.setItem("lastCheckedForecast", JSON.stringify(lastCheckedForecast));
}



function showSavedParavetres() {

    lastCheckedCity = JSON.parse(localStorage.getItem("lastCheckedCity"));
    list = JSON.parse(localStorage.getItem("list"));
    listForecast = JSON.parse(localStorage.getItem("listForecast"));
    lastCheckedForecast = JSON.parse(localStorage.getItem("lastCheckedForecast"));    

    if (list === null) {
        list = [];
    }

    if (lastCheckedCity === null) {
        lastCheckedCity = [];
    }

    if (listForecast === null) {
        listForecast = [];
    }

    if (lastCheckedForecast === null) {
        lastCheckedForecast = [];
    }

    if (lastCheckedCity.length != 0) {

        cityNow.textContent = lastCheckedCity[lastCheckedCity.length - 1].name;
        temperatureNow.textContent = Math.round(lastCheckedCity[lastCheckedCity.length - 1].main.temp - 273) + '°';

        // Таб с деталями
        detailsTitle.textContent = lastCheckedCity[lastCheckedCity.length - 1].name;

        parameterTemperature.textContent = `Temperature: ${Math.round(lastCheckedCity[lastCheckedCity.length - 1].main.temp - 273) + '°'}`;

        parameterFeelsLike.textContent = `Feels like: ${Math.round(lastCheckedCity[lastCheckedCity.length - 1].main.feels_like  - 273) + '°'}`;

        const sunriseTime = lastCheckedCity[lastCheckedCity.length - 1].sys.sunrise;
        const sunriseConverted =  format(new Date(1000 * sunriseTime), 'kk:mm');
        parameterSunrise.textContent = `Sunset: ${sunriseConverted}`;

        let sunsetTime = lastCheckedCity[lastCheckedCity.length - 1].sys.sunset;
        let sunsetConverted = format(new Date(1000 * sunsetTime), 'kk:mm');
        parameterSunset.textContent = `Sunset: ${sunsetConverted}`;
    }

    render()

    if (lastCheckedForecast.length != 0) {
        showForecast();
    } else {
        return
    }
}


showSavedParavetres()




// Функция проверка

let check = document.querySelector('.added-citys_title');
function checkStorage() {
    console.log(localStorage);
    console.log(list);
    // console.log(lastCheckedCity);
    // console.log(listForecast);
    // console.log(lastCheckedForecast);
    // localStorage.clear()
}
check.addEventListener('click', checkStorage);


