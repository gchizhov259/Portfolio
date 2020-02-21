const parallax = document.querySelector(".parallax");
const layers = parallax.children;

function moveLayaersDependsOnScroll(wScroll) {
  Array.from(layers).forEach(layer => {
    const divider = layer.dataset.speed;
    const strafe = (wScroll * divider) / 10;

    layer.style.transform = `translateY(-${strafe}%)`;
  });
}

// function initParallax() {
window.addEventListener("scroll", e => {
  const wScroll = window.pageYOffset;
  moveLayaersDependsOnScroll(wScroll);
});
// }

// window.onresize = function() {
//   const wellcome = document.querySelector(".wellcome");
//   if (document.documentElement.clientWidth > 768) {
//     initParallax();
//   } else {
//     wellcome.style.backgroundImage =
//       "url('../images/content/background/768.jpg')";
//   }
// };
