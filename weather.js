function getweather(){
const city = document.querySelector('.city').value;
const apiKey = '3319251737b815ff9b27c50cdb168122';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.cod != 200){
            document.querySelector('.result').style.display='block';
            document.querySelector('.result').innerHTML = `Error : ${data.message}`
            return;
        }
        const temperature = data.main.temp;
        const weathercondition = data.weather[0].description;
         
        document.querySelector('.result').innerHTML= `Temperature: ${temperature}°C <br> Condition: ${weathercondition}`;
        document.querySelector('.result').style.display='block';
        if(weathercondition.includes('rain')){
            document.body.style.backgroundImage = "url('./images/Rainy.jpg')";
        }
        else if(weathercondition.includes('cloud')){
            document.body.style.backgroundImage = "url('./images/Cloudy.jpg')";
       }
       else if(weathercondition.includes('clearsky')){
          document.body.style.backgroundImage = "url('./images/clearSky.jpg')";
       }
       else if(weathercondition.includes('snow')){
           document.body.style.backgroundImage = "url('./images/Snowy.jpg')";
       }
       else if(weathercondition.includes('thunder strom')){
           document.body.style.backgroundImage = "url('./images/Thunderstrom')";
       }else if(weathercondition.includes('sun')){
           document.body.style.backgroundImage = "url('./images/sunny.jpg')";
       } 
       else{
        document.body.style.backgroundImage = "url('./images/Thunderstrom.jpg')";
       }
       
    }) 
    .catch(error => {
        console.error('Error:',error);
        document.querySelector('.result').style.display = 'block';
        document.querySelector('.result').innerHTML = 'Error: unable to fetch data.Please check your internet connection or try again later';
})
}
document.querySelector('.reset').addEventListener('click', () =>{
    document.querySelector('.city').value = '';
    document.querySelector('.result').style.display="none";
    document.body.style.backgroundImage = "url('./images/Thunderstrom.jpg')";
}
)