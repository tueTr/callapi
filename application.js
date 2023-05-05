//call api from server
$.get("https://api.openweathermap.org/data/2.5/weather?q=adelaide&id=524901&APPID=710a8a155ade8daf23d7240bf1ca4d6f&units=metric",
function(api){
    console.log(api);
    console.log("local temp: " +api.main.temp);
    console.log(api.weather[0].description);
    console.log("wind speed" +api.wind.speed);
    $('.temp').html('local temp: ' +api.main.temp);
    $('.icon img').attr('src','https://openweathermap.org/img/wn/' +api.weather[0].icon+ '.png');
    $('.humidity').html('humidity: ' +api.main.humidity);
});

/*call api
$.get("api url", function)(){       });*/