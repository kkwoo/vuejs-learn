const TwoWayBinding = {
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
    methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')
