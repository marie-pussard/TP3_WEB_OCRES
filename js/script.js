
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  let ville = document.getElementById('city-input').value;

  // Si la ville n'est pas définit alors la ville par défault est Paris
  if(ville.length == 0){ //triple égal pour vérifier égalité entre valeur et type 
    ville = "paris";
  }
  

  const apiWeather = new API_WEATHER(ville);
  // Appel de la fonction fetchTodayForecast

  apiWeather.fetchTodayForecast().then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

    }).catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
  
  apiWeather.getThreeDayForecast().then(function(response){
    const data1 = response.data1;

    //Demain

    const main_demain = data1.list[1].weather[0].main;
    const description_demain = data1.list[1].weather[0].description;
    const temp_demain = data1.list[1].temp.day;
    const icon_demain = apiWeather.getHTMLElementFromIcon(data1.list[1].weather[0].icon);

    document.getElementById('today-forecast-main-demain').innerHTML = main_demain;
    document.getElementById('today-forecast-more-info-demain').innerHTML = description_demain;
    document.getElementById('icon-weather-container-demain').innerHTML = icon_demain;
    document.getElementById('today-forecast-temp-demain').innerHTML = `${temp_demain}°C`;

    //Après-demain (AD)

    const main_AD = data1.list[2].weather[0].main;
    const description_AD = data1.list[2].weather[0].description;
    const temp_AD = data1.list[2].temp.day;
    const icon_AD = apiWeather.getHTMLElementFromIcon(data1.list[2].weather[0].icon);

    document.getElementById('today-forecast-main-AD').innerHTML = main_AD;
    document.getElementById('today-forecast-more-info-AD').innerHTML = description_AD;
    document.getElementById('icon-weather-container-AD').innerHTML = icon_AD ;
    document.getElementById('today-forecast-temp-AD').innerHTML = `${temp_AD}°C`;

    //Encore Après-demain (EAD)

    const main_EAD = data1.list[3].weather[0].main;
    const description_EAD = data1.list[3].weather[0].description;
    const temp_EAD = data1.list[3].temp.day;
    const icon_EAD = apiWeather.getHTMLElementFromIcon(data1.list[3].weather[0].icon);

    document.getElementById('today-forecast-main-EAD').innerHTML = main_EAD;
    document.getElementById('today-forecast-more-info-EAD').innerHTML = description_EAD;
    document.getElementById('icon-weather-container-EAD').innerHTML = icon_EAD;
    document.getElementById('today-forecast-temp-EAD').innerHTML = `${temp_EAD}°C`;

  }).catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });


}
