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
const modal = document.getElementById("modal-icebreaker");
const iframe = document.querySelector("iframe");

window.addEventListener("load", () => {
  console.log(icebreaker);
});

function icebreakerOpen() {
  modal.classList.add("is-show");
}

splide.on("click", function (e) {
  var clickSlide = e.slide.firstElementChild;
  console.log(clickSlide);
  if (!e.target.closest(iframe)) {
    console.log(click);
  }
  if (clickSlide.getAttribute("id") == icebreaker.getAttribute("id")) {
    console.log("成功");
    icebreakerOpen();
  }
});
