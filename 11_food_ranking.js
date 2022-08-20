// Food Ranking
// A website needs a list where users can rank their favorite foods. Write the setup function, which should register click handlers on all Up! and Down! buttons. The Up! button should move the list item one place up in the list, while Down! button should move the list item one place down in the list.

// For example, consider this code:

// document.body.innerHTML = `<ol>
//   <li><button>Up!</button>Taco<button>Down!</button></li>
//   <li><button>Up!</button>Pizza<button>Down!</button></li>
//   <li><button>Up!</button>Eggs<button>Down!</button></li>
// </ol>`;

// setup();
// If the button Up! button in Pizza list item is clicked, Pizza should be the first item in the list, while Taco should be the second item.


//https://stackoverflow.com/questions/70773756/food-ranking-list-challenge-testdome
function setup() {
    // Write your code here
    let btnList = document.querySelectorAll('button')
  
    for (let button of btnList) {
      button.addEventListener('click', handleClick)
    }
  }
  
  function handleClick(e) {
    let parent = e.target.parentElement
    let isUp = e.target.textContent === 'Up!'
    let isDown = e.target.textContent === 'Down!'
    let isFirst = !parent.previousElementSibling
    let isLast = !parent.nextElementSibling
  
    if (isUp && !isFirst)
      parent.parentNode.insertBefore(parent, parent.previousElementSibling)
  
    if (isDown && !isLast)
      parent.parentNode.insertBefore(parent.nextElementSibling, parent)
  }

  setup() 