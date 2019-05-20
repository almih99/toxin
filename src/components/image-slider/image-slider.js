require("./Carousel-Plugin-jQuery-RV-Gallery/dist/RV-gallery.min.js");


$(document).ready(
  function(e) {
    $(".gallery").initGallery({
        showNav: false,
        showNavIfOneItem: false,
        aspectRatio: "auto",
        showDots: true,
        showDotsIfOneItem: true,
        arrows: true,
        nav: ["<span class='image-slider__arrow-left'></span>", "<span class='image-slider__arrow-right'></span>"],
        fullScreen: false,
        loop: true,
        autoplay: false,
        autoplayDelay: 2000,
        transition: "slide",
        transitionTime: 500,
    });
  }
)

