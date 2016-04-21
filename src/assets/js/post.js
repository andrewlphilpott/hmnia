var likes = new Firebase('https://hmnia.firebaseIO.com/likes');
var url = window.location.href;
var segments = url.split('/');
var lat = 'unknown';
var lng = 'unknown';
var coolForm = document.querySelector('.cool');
var coolCount = document.querySelector('.cool_count');
var coolLbl = document.querySelector('.cool_lbl');

if(segments[segments.length - 1].length == 0) {
  var lastSegment = segments[segments.length - 2];
} else {
  var lastSegment = segments[segments.length - 1];
}

// Get the user’s location
function getLocation() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  }
}

function showPosition(position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;
}

// getLocation();

// The the user’s time
var time = new Date();
var dd = time.getDate();
var mm = time.getMonth()+1;
var yyyy = time.getFullYear();
var hour = time.getHours();
var minute = time.getMinutes();

if(dd < 10){
    dd = '0' + dd
}
if(mm < 10){
    mm = '0' + mm
}
if(hour < 10){
    hour = '0' + hour
}
if(minute < 10){
    minute = '0' + minute
}
var time = mm + '/' + dd + '/' + yyyy + ' ' + hour + ':' + minute;

// Add a cool when the button is hovered
var coolTimer;

if(getCookie('liked')) {
  setVoted();
}

coolForm.onmouseenter = initCool;
coolForm.onmouseleave = cancelCool;
coolForm.ontouchstart = function(e){
  e.preventDefault();
  coolForm.className = coolForm.className.replace('unhover', '');
  initCool();
}
coolForm.ontouchend = function(e){
  e.preventDefault();
  coolForm.className += ' unhover';
  setTimeout(function(){
    cancelCool();
  }, 10);
}

// Show number of cools
coolForm.className += ' enabled';

likes.orderByChild('post').equalTo(lastSegment).on('value', function(snapshot){
  var cools = snapshot.numChildren();
  coolCount.innerHTML = cools;
  coolForm.className += ' visible';
});

// Detect double tap
// var tapTimer = null;
// function checkTap(e){
//   if(tapTimer == null) {
//     tapTimer = setTimeout(function(){
//       tapTimer = null;
//     }, 500);
//   } else {
//     clearTimeout(tapTimer);
//     tapTimer = null;
//     pushCool();
//   }
// }

// Cool timer
function initCool(e){
  if(!coolForm.classList.contains('voted') && !getCookie('liked')) {
    console.log('init');
    coolTimer = setTimeout(function(){
      pushCool();
    }, 1000);
  }
}

// Push cool
function pushCool(){
  likes.push ({
    post: lastSegment,
    // lat: lat,
    // lng: lng,
    time: time
  });
  setVoted();
  document.cookie = 'liked=' + url;
}

// Cancel cool
function cancelCool(e){
  console.log('cancel');
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
