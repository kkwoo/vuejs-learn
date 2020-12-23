const CounterApp = {
  data() {
    return {
      counters: [],
      currentCounter: 0,
      timer: "",
      time: 0,
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
      this.time = Date.now();
      this.currentCounter = 0;
      this.timer = setInterval(() => {
        this.currentCounter++;
      }, 100);
      this.timerAction = "Stop";
    },
    toggleTimer() {
      if (this.timer === "") {
        this.startTimer();
      } else {
        this.stopTimer();
        outside.eventuallyAddEvent({start: this.time, end: Date.now()});
      }
    },
    gapiSignOut() {
      this.authorised = !(this.authorised);
      gapi.auth2.getAuthInstance().signOut();
    },
    gapiAuthorise() {
      this.authorised = !(this.authorised);
      gapi.auth2.getAuthInstance().signIn();
    },
    initClient() {
      gapi.client.init({
        clientId: clientParms.CLIENT_ID,
        discoveryDocs: clientParms.DISCOVERY_DOCS,
        scope: clientParms.SCOPES
      }).then(function () {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

        // Handle the initial sign-in state.
        this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      }, function(error) {
        appendPre(JSON.stringify(error, null, 2));
      });
    },
  },
  computed: {
    timerDisplay() {
      return `${Math.floor(this.currentCounter / 10)}.${this.currentCounter % 10}`;
    }
  },
  mounted() {
    this.startTimer();
    gapi.load('client:auth2', this.initClient);
  }
}

Vue.createApp(CounterApp).mount('#counter')