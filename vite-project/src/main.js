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

document.addEventListener('DOMContentLoaded', function() {
        
    const slider = document.getElementById("myRange");
    const drawButton = document.getElementById("drawButton");

    //testing
    const cardContainer = document.getElementById("cardContainer");
    drawButton.innerHTML =  "Pick " + slider.value + " Cards"; 

    //currently this really doesn't do anything because you still only get 1 card no matter what, will change this
    //when I make a database and will randomly pick x amount of cards from that database and make them into divs...
    slider.oninput = function() {
      drawButton.innerHTML = "Pick " + this.value + " Cards";
    }

    drawButton.addEventListener('click',function(){
      
      //loops the entire amount of cards they want to draw
      //added a -1 to the slider value because I have void hard coded in.
      //PLEASE REMINDER MARA PLEASE REMOVE THAT -1 once you connect database
      for(let i =0; i < slider.value-1; i++){

        const card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `
          <h2 class="card-title">A</h2>
          <div class ="line"></div> 
          <p class="card-description">Put your stuff here</p>
      `;
      cardContainer.append(card);
      }

    });
});




//Initiative tracker
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const characterList = document.getElementById('characterList');
    const nextButton = document.getElementById('nextButton');

    addButton.addEventListener('click', function() {
      const characterName = document.getElementById('characterName').value;
      const initiative = document.getElementById('initiative').value;
     
      if (characterName && initiative) {
        const character = document.createElement('div');
        character.classList.add('character');
        character.innerHTML = `
          <div class="character-info">${characterName}</div>
          <div class="init-line"></div>
          <div class="initiative">${initiative}</div>
          <button class="removeButton">Remove</button>
        `;
        if(characterList.children.length === 0){
            character.classList.add('active-init');
        }
       
        characterList.appendChild(character);
  
        document.getElementById('characterName').value = '';
        document.getElementById('initiative').value = '';
        
        sortCharactersByInitiative();

        const removeButtons = document.querySelectorAll('.removeButton');
        removeButtons.forEach(button => {
          button.addEventListener('click', function() {
            if(button.parentNode.classList.contains('active-init') && Array.from(characterList.children).length > 1){
                if(button.parentNode.nextElementSibling === null){
                    button.parentNode.classList.remove('active-init');
                    button.parentNode.previousElementSibling.classList.add('active-init');
                }
                else{
                    button.parentNode.classList.remove('active-init');
                    button.parentNode.nextElementSibling.classList.add('active-init');
                }
            }
            button.parentNode.remove();
            
          });
        });   
      }
      
    });
    

    nextButton.addEventListener('click', function() {
        const characters = Array.from(characterList.children);
        for(let i = 0; i < characters.length; i++){
            
            if(characters[i].classList.contains('active-init')){
                if(i < characters.length - 1){
                    characters[i].classList.remove('active-init');
                    characters[i + 1].classList.add('active-init');
                    return;
                }
                else{
                    characters[i].classList.remove('active-init');
                    characters[0].classList.add('active-init');
                    return;
                }
            }
            
        }
    });

    function sortCharactersByInitiative() {
      const characters = Array.from(characterList.children);
      characters.sort((a, b) => {
        const aInitiative = parseInt(a.querySelector('.initiative').textContent);
        const bInitiative = parseInt(b.querySelector('.initiative').textContent);
        return bInitiative - aInitiative;
      });
    
      //adds all of the characters back into characterList after sorting them
      characters.forEach(character => characterList.appendChild(character));
      for(let i = 0; i < characters.length; i++){
        if(characters[i].classList.contains('active-init')){
            characters[i].classList.remove('active-init');
        }
      }
      //Once you add a character set the first one to active
      characters[0].classList.add('active-init');
    }

  });
 
