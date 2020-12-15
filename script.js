const ConditionalRendering = {
  data() {
    return {
      seen: true,
      text: "mvp"
    }
  },
    methods: {
    swapVisibility() {
      this.seen = !(this.seen);
    }
    }
};

Vue.createApp(ConditionalRendering).mount('#conditional-rendering');