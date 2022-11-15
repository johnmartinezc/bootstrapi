let button = document.querySelector('#button')
let img = document.querySelector('img')

button.addEventListener('click',function(){

fetch('https://dog.ceo/api/breeds/image/random')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    console.log(data.message)
    console.log(data.status)
    img.src = data.message
})
})


let weatherForm =document.querySelector("#weatherform")
let cityInput = document.querySelector("#cityInput")
let img1 = document.querySelector('imga')
let div1 = document.querySelector("#div1")
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')
let desc = document.querySelector('#desc')

weatherForm.addEventListener('submit',function(event){
event.preventDefault()
fetch(encodeURI('https://goweather.herokuapp.com/weather/{'+cityInput.value+'}'))
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    temp.innerHTML = data.temperature
    wind.innerHTML = data.wind
    desc.innerHTML = data.description
    
})
cityInput.value= ''
})


