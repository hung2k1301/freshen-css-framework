let sliders1 = document.querySelectorAll(".glide-1");
for (let i = 0; i < sliders1.length; i++) {
  let glide = new Glide(sliders1[i], {
    breakpoints: {
      3000: {
        perView: 10,
      },
      1280: {
        perView: 3,
      },
      800: {
        perView: 2,
      },
    },
  });
  glide.mount();
}

let sliders2 = document.querySelectorAll(".glide-2");
for (let i = 0; i < sliders2.length; i++) {
  let glide = new Glide(sliders2[i], {
    breakpoints: {
      3000: {
        perView: 3,
      },
      1023: {
        perView: 2,
      },
      280: {
        perView: 1,
      },
    },
  });
  glide.mount();
}

let sliders3 = document.querySelectorAll(".glide-3");
for (let i = 0; i < sliders3.length; i++) {
  let glide = new Glide(sliders3[i], {
    breakpoints: {
      3000: {
        perView: 1,
      },
    },
  });
  glide.mount();
}
