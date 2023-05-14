let myElements = document.querySelectorAll(".rests");
let myButton = document.getElementById("Adv-show");

myButton.addEventListener("click", function () {
  myElements.forEach(function (element) {
    element.classList.toggle("hidden");
  });
  myButton.innerHTML = "Qisqartirish";
});

const modeBtn = document.querySelectorAll('.mode-btn');
console.log(modeBtn);

modeBtn[0].addEventListener('click',()=>{
  document.querySelector('body').classList.toggle('night');
})
// modeBtn[1].addEventListener('click',()=>{
//   modeBtn[0].classList.remove('active');
//   modeBtn[1].classList.add('active');
//   document.querySelector('body').classList.remove('night');
// })
// window.addEventListener("scroll", function () {
//   toggleBacktop();
// });

