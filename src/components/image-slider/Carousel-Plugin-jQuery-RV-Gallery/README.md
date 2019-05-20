# RV gallery-slider

Lightweight and touch-friendly gallery-slider based on jQuery.

# Demo 

https://amigolituano.github.io/RV-gallery-slider/src/

# Gallery init

### HTML
```
<div class="gallery">
    <img class="gallery-item" src="images/1.jpg">
    <img class="gallery-item" src="images/2.jpg">
    <img class="gallery-item" src="images/3.jpg">
    <img class="gallery-item" src="images/4.jpg">
    <img class="gallery-item" src="images/5.jpg">
</div>
```

### Javascript

Include RV-gallery.min.js from dist folder in your project and run jQuery command:

```
$(selection).initGallery({options});
```

### CSS

Include RV-gallery.min.css from dist folder in your project

# Available Options and default values

### Navigation buttons
```
nav: ["<span> < </span>", "<span> > </span>"]
```

### Close button
```
close: "<span>X</span>"
```

### Small image navigation
```
showNav: true
```

True for gallery and false for slider

### Show navigation if only one item in gallery
```
showNavIfOneItem: false
```

### Aspect Ratio
```
aspectRatio: "auto"
```

Numeric input or "auto"

### Dots
```
showDots: false
```

### Show dots if only one item in gallery
```
showDotsIfOneItem: false
```

### Arrows
```
arrows: false
```

Best with showNav:false when small image navigation is not showing. Arrows is navigation buttons for slider.

### Fullscreen
```
fullScreen: true
```

You can turn on or off ability to show images fullscreen;

### Loop
```
loop: true
```

True for looping through gallery without end.

### Autoplay
```
autoplay: false
```

### AutoplayDelay
```
autoplayDelay: 2000
```

### Transition type
```
transition: "fade"
```

"fade", "slide" and false available

### Transition time
```
transitionTime: 500
```

# All options and default values in one place

```
nav: ["<span> < </span>", "<span> > </span>"],
close: "<span>X</span>",
showNav: true,
showNavIfOneItem: false,
aspectRatio: "auto",
showDots: false,
showDotsIfOneItem: false,
arrows: false,
fullScreen: true,
loop: true,
autoplay: false,
autoplayDelay: 2000,
transition: "fade",
transitionTime: 500,
```
