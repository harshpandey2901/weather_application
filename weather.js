const apikey ="04ddeab5ec1270f114e501a9210a8cff";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const serchcity = document.querySelector('.search input');
const searchbutton = document.querySelector('.search button');
const weathericon = document.querySelector('.weatherimg');
const body = document.querySelector('body');
async function checkweather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if(response.status === 404)
    {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else
    {var data = await response.json();
    console.log(data);
    const timestamp = data.sys.sunrise;
const convertedTime = new Date(timestamp * 1000);
const options = { hour: '2-digit', minute: '2-digit', hour12: true };
const formattedTime = convertedTime.toLocaleTimeString([], options);
// console.log(formattedTime);

const timestamp2 = data.sys.sunset;
const convertedTime2 = new Date(timestamp2 * 1000);
const options2 = { hour: '2-digit', minute: '2-digit', hour12: true };
const formattedTime2 = convertedTime2.toLocaleTimeString([], options2);
// console.log(formattedTime2);


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) +'°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity +='%';
    document.querySelector('.wind').innerHTML = data.wind.speed+=' km/hr';
    document.querySelector('.T_max').innerHTML = data.main.temp_max+='°c';
    document.querySelector('.T_min').innerHTML = data.main.temp_min+='°c';
    document.querySelector('.sunrise').innerHTML = data.main.temp_min=formattedTime;
    document.querySelector('.sunset').innerHTML = data.main.temp_min=formattedTime2;


     if(data.weather[0].main == 'Clouds')
     {
        weathericon.src = 'images/clouds.png';
        body.style.backgroundImage = "url('images/cloudbi.jpg')";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";

     }
     else if(data.weather[0].main == 'Clear')
     {
        weathericon.src = 'images/clear.png';
        body.style.backgroundImage = "url('images/clear.jpg')";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";

     }
     else if(data.weather[0].main == 'Drizzle')
     {
        weathericon.src = 'images/drizzle.png';
        body.style.backgroundImage = "url('images/drizzlebg.jpg')";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";

     }
     else if((data.weather[0].main) == 'Humidity')
     {
        weathericon.src = 'images/humidity.png';
        body.style.backgroundImage = "url('images/cloudbi.jpg')";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";

     }
     else if((data.weather[0].main) == 'Snow')
     {
        weathericon.src = 'images/snow.png';
        body.style.backgroundImage = "url('images/snowy.jpg')";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";

     }
     else if((data.weather[0].main) == 'Rain')
     {
        weathericon.src = 'images/rain.png';
        body.style.backgroundImage = "url('images/rainy.jpg')";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";

     }
     else if((data.weather[0].main) == 'Wind')
     {
        weathericon.src = 'images/wind.png';
        body.style.backgroundImage = "url('images/wind.jpg')";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";

     }
     else if((data.weather[0].main) == 'Mist')
     {
        weathericon.src = 'images/mist.png';
        body.style.backgroundImage = "url('images/misty.jpg')";
        body.style.backgroundPosition = "center";
        body.style.backgroundRepeat = "no-repeat";

     }
     document.querySelector('.weather').style.display = 'block';
     document.querySelector('.error').style.display = 'none';}

}
searchbutton.addEventListener('click',()=>
{
    
    checkweather(serchcity.value);

});
 
 



