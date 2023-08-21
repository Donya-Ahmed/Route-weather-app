var todatWeather = document.getElementById('today')
var tomWeather = document.getElementById('next')
var date=new Date()
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
(function(){
todayW("cairo")
tomorrowW("cairo")
})();
async function todayW(country) {
  var dataToday = await fetch(`https://api.weatherapi.com/v1/current.json?key=f57a42722fa3426680b131831232202&q=${country}`)
  var dataT = await dataToday.json()
  console.log()
  displayToday(dataT)
}

function displayToday(obj) {
 
  var box = `    <div class="d-flex justify-content-between">
  <span>${weekday[date.getDay()]}</span>
  <span>${date.getDate()}${month[date.getMonth()]}</span>
</div>
<div>
  <div class="mt-2">${obj.location.name}</div>

  <div><span class="deg">${obj.current.temp_c}&#176;c</span><img src='https:${obj.current.condition.icon}' class=w-25></div>
  <div><span class="text-info">${obj.current.condition.text}</span></div>
</div>`
todatWeather.innerHTML=box
}

async function tomorrowW(country) {
  var dataToday = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=f57a42722fa3426680b131831232202&days=3&q=${country}`)
  var dataT = await dataToday.json()

  displayTomorrow(dataT)
  
}
function displayTomorrow(obj) {
  var arr=obj.forecast.forecastday.slice(1)

  console.log(arr)
  boxx=''
 for (let i = 0; i < arr.length; i++) {
  boxx+=` <div class="col-6 text-center">
  <div>${weekday[date.getDay()+i+1]}</div>
  <div><img src='https:${arr[i].day.condition.icon}' class=w-25></div>
<div>${arr[i].day.maxtemp_c}&#176;c</div>
<div>${arr[i].day.mintemp_c}&#176;c</div>
<div>${arr[i].day.condition.text}&#176;c</div> 
 

  </div>`
  
 }
 tomWeather.innerHTML=boxx

}
function search(item) {
  todayW(item)
  tomorrowW(item)
}