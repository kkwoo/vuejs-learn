const CounterApp = {
  data() {
    return {
      counter: 0,
      timer: "",
      timerAction: "Start"
    }
  }, 
  methods: {
    stopTimer() {
      clearInterval(this.timer);
      this.timer = "";
      this.timerAction = "Start";
    },
    startTimer() {
      this.counter = 0;
      this.timer = setInterval(() => {
        this.counter++
      }, 100);
      this.timerAction = "Stop";
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