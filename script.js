const CounterApp = {
  data() {
    return {
      counters: [],
      currentCounter: 0,
      timer: "",
      authorised: false,
      timerAction: "Start"
    }
  }, 
  methods: {
    stopTimer() {
      clearInterval(this.timer);
      const storedVal = this.timerDisplay;
      this.counters.push({id: this.counters.length+1, value: storedVal});
      this.timer = "";
      this.timerAction = "Start";
    },
    startTimer() {
      this.currentCounter = 0;
      this.timer = setInterval(() => {
        this.currentCounter++;
      }, 100);
      this.timerAction = "Stop";
    },
    toggleTimer() {
      (this.timer === "") ? this.startTimer() : this.stopTimer();
    },
    gapiSignOut() {
      this.authorised = !(this.authorised);
    },
    gapiAuthorise() {
      this.authorised = !(this.authorised);
    }
  },
  computed: {
    timerDisplay() {
      return `${Math.floor(this.currentCounter / 10)}.${this.currentCounter % 10}`;
    }
  },
  mounted() {
    this.startTimer();
  }
}


Vue.createApp(CounterApp).mount('#counter')