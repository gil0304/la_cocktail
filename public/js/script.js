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
let modal = document.getElementById("modal");

window.addEventListener("load", () => {
  console.log(icebreaker);
});

function modalOpen() {
  modal.classList.add("is-show");
}

icebreaker.addEventListener("click", modalOpen);

splide.on("click", function () {
  modalOpen();
});
