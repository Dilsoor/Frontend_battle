let myElements = document.querySelectorAll(".rests");
let myButton = document.getElementById("Adv-show");

myButton.addEventListener("click", function () {
  myElements.forEach(function (element) {
    element.classList.toggle("hidden");
  });
  myButton.innerHTML = "Qisqartirish";
});

function myFunction(){ 
  var playVideo = document.getElementById('myVideo');
  var button = document.getElementById('myBtn');

  if (playVideo.paused) {
     playVideo.play();
      button.innerHTML= "pause";
  } else {
     button.innerHTML= "play";
     playVideo.pause();
  }
  };

