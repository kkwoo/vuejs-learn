const ConditionalRendering = {
  data() {
    return {
      seen: false
    }
  },
    methods: {
    swapVisibility() {
      this.seen = xor(this.seen);
    }
};

Vue.createApp(ConditionalRendering).mount('#conditional-rendering');