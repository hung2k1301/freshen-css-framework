const glideCategory = new Glide(".glide-category", {
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
}).mount();

const glideFeaturedProduct = new Glide(".glide-featured-product", {
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
}).mount();

const glideDealDay = new Glide(".glide-deal-of-the-day", {
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
}).mount();
