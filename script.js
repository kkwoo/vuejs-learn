const CounterApp = {
  data() {
    return {
      counter: 0,
      timer: "",
      timerStatusToggle: "Start"
    }
  }, 
  methods: {
    stopTimer() {
      clearInterval(this.timer);
      this.timer = "";
      this.timerStatusToggle = "Start";
    },
    startTimer() {
      this.counter = 0;
      this.timer = setInterval(() => {
        this.counter++
      }, 1000);
      this.timerStatusToggle = "Stop";
    },
    toggleTimer() {
      (this.timer === "") ? this.startTimer() : this.stopTimer();
    }
  },
  mounted() {
    this.startTimer();
  }
}


Vue.createApp(CounterApp).mount('#counter')