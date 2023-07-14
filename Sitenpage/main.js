//scroll onpage
function scrollToSer(event) {
    event.preventDefault();

    var content = document.getElementById("ser");
    content.scrollIntoView({behavior: 'smooth'});
}

function scrollToPrj(event) {
    event.preventDefault();

    var content = document.getElementById("prj");
    content.scrollIntoView({behavior: 'smooth'});
}

function scrollToSiten(event) {
    event.preventDefault();

    var content = document.getElementById("siten");
    content.scrollIntoView({behavior: 'smooth'});
}

function scrollToCont(event) {
    event.preventDefault();
    
    var content = document.getElementById("cont");
    content.scrollIntoView({ behavior: 'smooth' });
  }
  

  var header = document.getElementById('header');
var prevScrollPos = window.scrollY || document.documentElement.scrollTop;
var isScrollingUp = false;

window.addEventListener('scroll', function() {
  var currentScrollPos = window.scrollY || document.documentElement.scrollTop;
  
  if (currentScrollPos > prevScrollPos && !isScrollingUp) {
    header.classList.add('header-hid');
    isScrollingUp = true;
  } else if (currentScrollPos < prevScrollPos && isScrollingUp) {
    header.classList.remove('header-hid');
    isScrollingUp = false;
  }
  
  prevScrollPos = currentScrollPos;
});

