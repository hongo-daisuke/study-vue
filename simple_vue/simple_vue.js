const app = Vue.createApp({
    data: () => ({
        message : 'Hello Vue.js!',
        count   : 99,
        user    : {
            lastName   : 'Hongo',
            firstName  : 'Daisuke',
            prefecture : 'Tokyo'
        },
        colors: ['Red', 'Green', 'Blue'],
        vbind : 'Hello v-bind Vue.js!',
        toggle: true,
        now: '-',
        vmodel: 'Hello v-model Vue.js!'
    }),
    methods: {
        onClick: function(){
            this.now = new Date().toLocaleString()
        }
    }
})
app.component('hello-component', {
    template: "<p>Hello!</p>"
})
app.mount('#app')