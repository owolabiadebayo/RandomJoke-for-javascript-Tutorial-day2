const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');


button.addEventListener('click', function(){
Randomjoke()
})

const Randomjoke = () => {

  fetch('https://api.chucknorris.io/jokes/random')
  .then((Response) => Response.json())
  .then((json) => json)
  .then((data) => jokeDIV.innerHTML=`${data.value}`)
}