const d = document;

d.addEventListener("click", (e) => {
  if (e.target.matches(".am-shuriken")) {
    e.target.classList.toggle("girar");
  }
});
