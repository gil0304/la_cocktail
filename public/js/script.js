const options = {
  arrows: false,
  type: "loop",
  perPage: 5,
  focus: "center",
  updateOnMove: "true",
  autoScroll: {
    speed: 1,
    pauseOnHover: false,
    pauseOnFocus: true,
  },
  breakpoints: {
    450: {
      perPage: 1,
      speed: 0.8,
    },
  },
};

const splide = new Splide(".splide", options);
splide.mount(window.splide.Extensions);

const icebreaker = document.getElementById("icebreaker");
const tequilaSunrise = document.getElementById("tequila-sunrise");
const elDiablo = document.getElementById("el-diablo");
const paloma = document.getElementById("paloma");
const broadwayThirst = document.getElementById("broadway-thirst");
const matador = document.getElementById("matador");
const margarita = document.getElementById("margarita");
const mockingbird = document.getElementById("mockingbird");

const modalIcebreaker = document.getElementById("modal-icebreaker");
const modalTequilaSunrise = document.getElementById("modal-tequila-sunrise");
const modalElDiablo = document.getElementById("modal-el-diablo");
const modalPaloma = document.getElementById("modal-paloma");
const modalBroadwayThirst = document.getElementById("modal-broadway-thirst");
const modalMatador = document.getElementById("modal-matador");
const modalMargarita = document.getElementById("modal-margarita");
const modalMockingbird = document.getElementById("modal-mockingbird");

var clickSlide;

const mask = document.getElementById("mask");

function clickMask() {
  if (mask.classList.contains("is-show")) {
    mask.classList.remove("is-show");
  } else {
    mask.classList.add("is-show");
  }
}

splide.on("click", function (e) {
  clickSlide = e.slide.firstElementChild;
  clickMask();

  switch (clickSlide.getAttribute("id")) {
    case icebreaker.getAttribute("id"):
      modalIcebreaker.classList.add("is-show");
      break;
    case tequilaSunrise.getAttribute("id"):
      modalTequilaSunrise.classList.add("is-show");
      break;
    case elDiablo.getAttribute("id"):
      modalElDiablo.classList.add("is-show");
      break;
    case paloma.getAttribute("id"):
      modalPaloma.classList.add("is-show");
      break;
    case broadwayThirst.getAttribute("id"):
      modalBroadwayThirst.classList.add("is-show");
      break;
    case matador.getAttribute("id"):
      modalMatador.classList.add("is-show");
      break;
    case margarita.getAttribute("id"):
      modalMargarita.classList.add("is-show");
      break;
    case mockingbird.getAttribute("id"):
      modalMockingbird.classList.add("is-show");
      break;
    default:
      break;
  }
});

mask.addEventListener("click", (event) => {
  clickMask();
  switch (clickSlide.getAttribute("id")) {
    case icebreaker.getAttribute("id"):
      modalIcebreaker.classList.remove("is-show");
      break;
    case tequilaSunrise.getAttribute("id"):
      modalTequilaSunrise.classList.remove("is-show");
      break;
    case elDiablo.getAttribute("id"):
      modalElDiablo.classList.remove("is-show");
      break;
    case paloma.getAttribute("id"):
      modalPaloma.classList.remove("is-show");
      break;
    case broadwayThirst.getAttribute("id"):
      modalBroadwayThirst.classList.remove("is-show");
      break;
    case matador.getAttribute("id"):
      modalMatador.classList.remove("is-show");
      break;
    case margarita.getAttribute("id"):
      modalMargarita.classList.remove("is-show");
      break;
    case mockingbird.getAttribute("id"):
      modalMockingbird.classList.remove("is-show");
      break;
    default:
      break;
  }
});
