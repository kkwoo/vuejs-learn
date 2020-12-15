const ConditionalRendering = {
  data() {
    return {
      seen: false
    }
  },
    methods: {
    swapVisibility() {
      this.seen = !(this.seen);
    }
};

Vue.createApp(ConditionalRendering).mount('#conditional-rendering');