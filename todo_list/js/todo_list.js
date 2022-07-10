const app = Vue.createApp({
    data: () => ({
        newItem : '',
        todos : []
    }),
    methods: {
        addItem: function(event) {
            if(this.newItem === '') return
            let todo = {
                item: this.newItem,
                isDone: false
            }
            this.todos.push(todo)
            this.newItem = ''
        },
        deleteItem: function(index) {
            // splice(削除を始める配列index, 削除する長さ)
            this.todos.splice(index, 1)
        }
    }
})
app.mount('#app')