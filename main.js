// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeheart = document.querySelectorAll(".like-glyph");
const modal = document.getElementById("modal");
modal.classList.add('hidden')


function clickHeart(event) {
  const hearts = event.target
  mimicServerCall() 
    .then(function() {
      if (hearts.textContent === EMPTY_HEART) {
        hearts.innerText = FULL_HEART
        hearts.className = "activated-heart";
      } else {
        hearts.innerText = EMPTY_HEART
        hearts.className = ""
      }
    })
    .catch(function(fail) {
      modal.innerText = fail.message
      modal.className = ""
      setTimeout(() => modal.className = "hidden", 3000)
    });
}

for (const hearts of likeheart) {
  hearts.addEventListener("click", clickHeart);
}







//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
