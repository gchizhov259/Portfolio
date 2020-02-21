import Vue from "vue";

const thumbs = {
  template: "#slider-thumbs",
  props: ["works", "currentWork", "disableItemForSmallScreen"]
};

const btns = {
  template: "#slider-btns",
  props: ["works", "currentWork"]
};

const display = {
  template: "#slider-display",
  components: {
    thumbs,
    btns
  },
  props: ["works", "currentWork", "disableItemForSmallScreen", "currentIndex"]
};

const tags = {
  template: "#slider-tags",
  props: ["tags"]
};

const info = {
  template: "#slider-info",
  components: { tags },
  props: ["currentWork"],
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(", ");
    }
  }
};

new Vue({
  el: "#slider-component",
  template: "#slider-container",
  components: {
    display,
    info
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    };
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    },

    disableItemForSmallScreen() {
      return document.documentElement.clientWidth <= 1300;
    }
  },

  // берем имя картинок после обработки webpack
  methods: {
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requirePic = require(`../images/content/${item.photo}`);
        item.photo = requirePic;
        return item;
      });
    },

    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },

    makeStopSlideForIndex(value) {
      const worksAmountComputerCounted = this.works.length - 1;

      if (value > worksAmountComputerCounted)
        this.currentIndex = worksAmountComputerCounted;
      if (value < 0) this.currentIndex = 0;
    },

    setActiveSlide(index) {
      this.currentIndex = index - 1; // элементы в массиве начинаются с 1
    }
  },
  watch: {
    currentIndex(value) {
      this.makeStopSlideForIndex(value);
    }
  },
  created() {
    const data = require("../data/works.json");
    this.works = this.makeArrWithRequiredImages(data);
  }
});
