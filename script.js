const ConditionalRendering = {
  data() {
    return {
      seen: false
    }
  },
    methods: {
    swapVisibility() {
      this.message = xor(this.message);
    }
};

Vue.createApp(ConditionalRendering).mount('#conditional-rendering');