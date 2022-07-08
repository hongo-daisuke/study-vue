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
        vbind : 'Hello Vue.js!',
        toggle: true,
        now: '-',
        vmodel: 'Hello Vue.js!'
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