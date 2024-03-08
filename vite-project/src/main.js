import '../public/style.css'
import '../public/utils.css'
import '../public/elements.css'


document.addEventListener('DOMContentLoaded', function() {
    const drawButton = document.getElementById('drawButton');
    const cardContainer = document.getElementById('cardContainer');
    const slider = document.getElementById("myRange");

    drawButton.addEventListener('click', function() {
        drawButton.style.display = 'none';
        slider.style.display = 'none';
        cardContainer.classList.remove('hidden');
    });
});


document.addEventListener('DOMContentLoaded', function() {
        
    const slider = document.getElementById("myRange");
    const output = document.getElementById("drawButton");
    output.innerHTML =  "Pick " + slider.value + " Cards"; 

    //currently this really doesn't do anything because you still only get 1 card no matter what, will change this
    //when I make a database and will randomly pick x amount of cards from that database and make them into divs...
    slider.oninput = function() {
        output.innerHTML = "Pick " + this.value + " Cards";
}
});


const addButton = document.getElementById('addButton');
const characterList = document.getElementById('characterList');

addButton.addEventListener('click', function() {
  const characterName = document.getElementById('characterName').value;
  const initiative = document.getElementById('initiative').value;

  if (characterName && initiative) {
    const character = document.createElement('div');
    character.classList.add('character');
    character.innerHTML = `
      <span>${characterName}</span>
      <span>${initiative}</span>
      <button class="removeButton">Remove</button>
    `;
    characterList.appendChild(character);

    document.getElementById('characterName').value = '';
    document.getElementById('initiative').value = '';

    const removeButtons = document.querySelectorAll('.removeButton');
    removeButtons.forEach(button => {
      button.addEventListener('click', function() {
        button.parentNode.remove();
      });
    });
  }
});