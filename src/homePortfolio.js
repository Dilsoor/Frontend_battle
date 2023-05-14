let section2 = document.querySelector(".showPanel2");

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
    img: "images/portfolio/portfolio-5.png",
    title: "Veb sayt",
  },
  {
    img: "images/portfolio/portfolio-4.png",
    title: "Mobil ilova",
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
    img: "images/portfolio/portfolio-1.png",
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

let arr2 = [
  tabObj1.slice(6),
  tabObj2.slice(6),
  tabObj3.slice(6),
  tabObj4.slice(6),
  tabObj5.slice(6),
];

function getCard2(img, title) {
  return `<div class="showPanel__card">
      <img src="${img}" alt="${title}">
      <span>${title}</span>
      <div class="showPanel__card-hover">
        <img src="./images/portfolio/arrow.svg" alt="arrow">
        <p>UYMAKON ${title}</p>
      </div>
    </div>`;
}

function renderCardHome(obj) {
  for (const el of obj) {
    section2.innerHTML += getCard2(el.img, el.title);
  }
}

renderCardHome(arr2[0]);

const tabBtn2 = document.querySelectorAll(".tabBtn li");
tabBtn2[0].style.background =
  "linear-gradient(93.5deg, #1E11AD 12.37%, rgba(105, 17, 173, 0.95) 85.28%)";

function showTabHome(index) {
  tabBtn2.forEach((el) => {
    el.style.background = "transparent";
  });
  section2.innerHTML = "";
  tabBtn2[index].style.background =
    "linear-gradient(93.5deg, #1E11AD 12.37%, rgba(105, 17, 173, 0.95) 85.28%)";
  renderCardHome(arr2[index]);
}

// export default showTabHome;