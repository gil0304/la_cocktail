const options = {
  arrows: false,
  pagination: false,
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

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
document.getElementById("modal-bg").onclick = () => {
  document.body.style.overflow = "visible";
  modal.classList.remove("visible");
};

Array.from(document.getElementsByClassName("glass-img")).forEach((ele) => {
  ele.onclick = () => {
    if (document.body.clientWidth > 450) {
      document.body.style.overflow = "hidden";
      modalContent.setAttribute("src", `pages/${ele.dataset.name}.html`);
      modalContent.onload = () => {
        modal.classList.add("visible");
      };
    } else {
      window.location.href = `/pages/${ele.dataset.name}.html`;
    }
  };
});
