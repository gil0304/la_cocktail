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
};

const splide = new Splide(".splide", options);
splide.mount(window.splide.Extensions);

const icebreaker = document.getElementById("icebreaker");
let modal = document.getElementsByName("modal");

window.addEventListener("load", () => {
  console.log(icebreaker);
});

function modalOpen() {
  console.log("aaa");
  modal.classList.add("is-show");
}

icebreaker.addEventListener("click", modalOpen);
