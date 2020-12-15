const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  },
    methods: {
    addFixed() {
      this.todos.push({text: "one more"});
    }
  }
}

Vue.createApp(ListRendering).mount('#list-rendering')
