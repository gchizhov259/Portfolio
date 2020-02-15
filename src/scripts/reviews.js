import Vue from "vue";
import Flickity from "vue-flickity";

const btns = {
  template: "#reviews-btns"
};

const comments = {
  template: "#reviews-comments",
  props: ["reviews", "flickityOptions"],
  components: {
    Flickity
  }
};

new Vue({
  el: "#reviews-component",
  template: "#reviews-container",
  components: {
    btns,
    comments
  },

  data() {
    return {
      reviews: [],
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true,
        groupCells: 2

        // any options from Flickity can be used
      }
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