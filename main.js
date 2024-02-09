const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red' , 'yello' ,'blue' , 'green' , 'pink', 'purple' ]


body.style.backgroundColor = 'voilet'

button.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}
