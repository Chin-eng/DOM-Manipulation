document.querySelector('#sports').addEventListener('click', function(e) {
     console.log(e.target.getAttribute('id') + "is clicked")
})

const sports = document.querySelector('#sports')
const newSport = document.createElement('li')

newSport.innerText = 'rugby'
newSport.setAttribute('id', 'rugby')

sports.appendChild(newSport)