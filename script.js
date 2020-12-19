const CounterApp = {
  data() {
    return {
      counter: 0,
      timer: ""
    }
  }, 
  mounted() {
    timer = setInterval(() => {
      this.counter++
    }, 1000)
  }
}


Vue.createApp(CounterApp).mount('#counter')