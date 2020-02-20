import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper /* { default global options } */);

const btns = {
  template: "#reviews-btns"
};

const comments = {
  template: "#reviews-comments",
  props: ["reviews", "swiperOption"]
};

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    LocalSwiper: VueAwesomeSwiper.swiper,
    LocalSlide: VueAwesomeSwiper.swiperSlide,
    btns,
    comments
  },

  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      reviews: [] 
    };
  },

  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/userfiles/${item.author_pic}`);
        item.author_pic = requirePic;
        return item;
      });
    },

    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  },

  created() {
    const data = require("../data/reviews.json");
    this.reviews = this.makeArrWithRequiredImages(data);
  }
});