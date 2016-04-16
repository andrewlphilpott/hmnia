var likes = new Firebase('https://hmnia.firebaseIO.com/likes');
var url = window.location.href;
var segments = url.split('/');
var coolForm = document.querySelector('.cool');
var coolCount = document.querySelector('.cool_count');
var coolLbl = document.querySelector('.cool_lbl');

if(segments[segments.length - 1].length == 0) {
  var lastSegment = segments[segments.length - 2];
} else {
  var lastSegment = segments[segments.length - 1];
}

// If there’s a mouse, remove touch class
var body = document.querySelector('body');
body.className += ' touch';

document.onmousemove = function(){
  if(body.classList.contains('touch')) {
    body.className = body.className.replace(' touch', '');
  }
}

// Add a cool when the button is clicked
var coolTimer;

if(getCookie('liked')) {
  setVoted();
}

// coolForm.onclick = checkTap;
coolForm.onmouseover = initCool;
coolForm.onmouseout = cancelCool;

// Show number of cools
coolForm.className += ' enabled';

likes.orderByChild('post').equalTo(lastSegment).on('value', function(snapshot){
  var cools = snapshot.numChildren();
  coolCount.innerHTML = cools;
  coolForm.className += ' visible';
});

// Detect double tap
var tapTimer = null;
function checkTap(e){
  if(tapTimer == null) {
    tapTimer = setTimeout(function(){
      tapTimer = null;
    }, 500);
  } else {
    clearTimeout(tapTimer);
    tapTimer = null;
    pushCool();
  }
}

// Cool timer
function initCool(e){
  if(!coolForm.classList.contains('voted') && !getCookie('liked')) {
    coolTimer = setTimeout(function(){
      pushCool();
    }, 1000);
  }
}

// Push cool
function pushCool(){
  likes.push ({
    post: lastSegment
  });
  setVoted();
  document.cookie = 'liked=' + url;
}

// Cancel cool
function cancelCool(e){
  if(coolTimer) {
    clearInterval(coolTimer);
  }
}

// Set voted function
function setVoted() {
  coolForm.className += ' voted';
  coolLbl.innerHTML = 'Hey, thanks.';
}

// Get cookie function
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
