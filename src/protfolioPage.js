let section = document.querySelector(".showPanel");

let tabObj1 = [
  {
    img: "images/portfolio/portfolio-1.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-2.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-3.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "SMM",
  },
];

let tabObj2 = [
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-1.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-2.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-3.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "SMM",
  },
];

let tabObj3 = [
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-1.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-2.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-3.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "SMM",
  },
];

let tabObj4 = [
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-1.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-2.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-3.png",
    title: "SMM",
  },
];

let tabObj5 = [
  {
    img: "images/portfolio/portfolio-2.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-1.png",
    title: "Mobil ilova",
  },

  {
    img: "images/portfolio/portfolio-3.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "SMM",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
  },
  {
    img: "images/portfolio/portfolio-6.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-5.png",
    title: "SMM",
  },
];

let arr = [tabObj1, tabObj2, tabObj3, tabObj4, tabObj5];
function getCard(img, title) {
  return `<div class="showPanel__card">
    <img src="${img}" alt="${title}">
    <span>${title}</span>
    <div class="showPanel__card-hover">
      <img src="./images/portfolio/arrow.svg" alt="arrow">
      <p>UYMAKON ${title}</p>
    </div>
  </div>`;
}

function renderCardPrf(obj) {
  for (const el of obj) {
    section.innerHTML += getCard(el.img, el.title);
  }
}


renderCardPrf(arr[0]);

const tabBtn = document.querySelectorAll(".tabBtn li");
tabBtn[0].style.background =
  "linear-gradient(93.5deg, #1E11AD 12.37%, rgba(105, 17, 173, 0.95) 85.28%)";

function showTab(index) {
  tabBtn.forEach((el) => {
    el.style.background = "transparent";
  });
  section.innerHTML = "";
  tabBtn[index].style.background =
    "linear-gradient(93.5deg, #1E11AD 12.37%, rgba(105, 17, 173, 0.95) 85.28%)";
  renderCardPrf(arr[index]);
}


