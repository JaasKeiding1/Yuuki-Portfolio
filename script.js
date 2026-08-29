// keeping track of whether video bg is on or not
var videoIsOn = false;

// grab the elements we need, using var like the tutorial did
var staticBg = document.getElementById("bg-static");
var videoBg = document.getElementById("bg-video");
var switchBtn = document.getElementById("bgSwitchBtn");

function toggleBackground() {
  // simple if else to swap between the two backgrounds
  if (videoIsOn == false) {
    // turn video ON
    staticBg.style.display = "none";
    videoBg.style.display = "block";
    videoIsOn = true;
    switchBtn.innerHTML = "Switch to Static BG";
  } else {
    // turn video OFF, go back to static
    staticBg.style.display = "block";
    videoBg.style.display = "none";
    videoIsOn = false;
    switchBtn.innerHTML = "Switch to Video BG";
  }
}

// this function runs when you click one of the small pfps
// in the "pfp isle", it makes that one the big picture
function changePfp(clickedImg) {

  // change the big pic at the top to match what was clicked
  var bigPic = document.getElementById("mainPfp");
  bigPic.src = clickedImg.src;

  // remove the "selected" border from all the thumbnails first
  var allThumbs = document.getElementsByClassName("pfp-thumb");
  for (var i = 0; i < allThumbs.length; i++) {
    allThumbs[i].classList.remove("selected");
  }

  // then add it back just to the one we clicked
  clickedImg.classList.add("selected");
}

// just a fake submit handler since this is a portfolio demo
// doesnt actually send anything anywhere lol
function submitForm(e) {
  e.preventDefault();
  alert("Thanks for the message! (this is just a demo, nothing was actually sent)");
}
