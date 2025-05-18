
// scroll bar
const artcontent = document.getElementById("art-content");
const left = document.getElementById("left");
const right = document.getElementById("right");
const scrollAmount = 500; 

left.addEventListener('click', () => {
    artcontent.scrollLeft -= scrollAmount;
    });
    
right.addEventListener('click', () => {
    artcontent.scrollLeft += scrollAmount;
    });





// modal
// art modal
const art = document.getElementById("artcontainer");
const artbtn = document.getElementById("artworkbtn");
const closebtn = document.getElementById("closebtn");

artbtn.onclick = function() {
    art.style.display = "block";
}

closebtn.onclick = function() {
    art.style.display = 'none';
}


// frontend modal

const front = document.getElementById("frontContainer");
const frontbtn = document.getElementById("Frontendbtn");
const frontclosebtn = document.getElementById("frontclosebtn");

frontbtn.onclick = function() {
    front.style.display = "block";
}

frontclosebtn.onclick = function() {    
    front.style.display = 'none';
}






// navbar
function openNav(){
    const openbtn = document.getElementById("open-btn");
    const nav = document.getElementById("side-bar");
    nav.classList.remove('disable')
    openbtn.classList.add('disable')
}

function closeNav(){
    const openbtn = document.getElementById("open-btn");
    openbtn.classList.remove('disable')
    const nav = document.getElementById("side-bar");
    nav.classList.add('disable')
}





// scroll animations

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); // Run on page load too

