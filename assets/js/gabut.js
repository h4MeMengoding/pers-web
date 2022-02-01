const animationRubber = document.querySelectorAll(".animating-rubberBand");

animationRubber.forEach(function(animasiRubber){
  animasiRubber.addEventListener("mouseout", function () {
    setTimeout(function () {
      animasiRubber.classList.remove(
        "animate__animated",
        "animate__rubberBand"
      );
    }, 1200);
  });
  animasiRubber.addEventListener("mouseover", function () {
    animasiRubber.classList.add("animate__animated", "animate__rubberBand");
  });
});

new hoverEffect({
  parent: document.querySelector('.hEffect'),
  intensity: 0.3,
  image1: '../../media/photos/1.png',
  image2: '../../media/photos/2.png',
  displacementImage: '../../media/photos/disss.png',
  imagesRatio: 400 / 400
})
