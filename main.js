let mode = true;
document.getElementById("switch-flicker").addEventListener("click", () => {
  const wrapper = document.querySelector(".wrapper");
  if (mode) {
    wrapper.style.setProperty("transform", "translateX(150px)");
  } else {
    wrapper.style.setProperty("transform", "translateX(0)");
  }
  mode = !mode;
});
