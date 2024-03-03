document.addEventListener("DOMContentLoaded", function () {
  // div that has href attribute
  const divs = document.querySelectorAll("div[href]");
  // onlick event
  divs.forEach((div) => {
    div.addEventListener("click", function (e) {
      e.preventDefault();
      div.classList.add("tw-cursor-pointer");
      const href = this.getAttribute("href");
      window.open(href, "_blank");
    });
  });
});
