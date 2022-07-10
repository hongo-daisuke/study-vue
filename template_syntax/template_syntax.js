const app = Vue.createApp({
    data: () => ({
        vonec: 'Hello v-onec Vue.js!',
        vpre: 'Hello v-pre Vue.js!',
        vhtml: 'Hello <span style="color:red;">v-html</span> Vue.js!',
        vcloak: 'Hello v-cloak Vue.js!',
        vtext: 'Hello v-text Vue.js!',
        url: 'https://www.google.com/',
        computedMsg: 'Hello computed Vue.js!'
    }),
    methods: {
        clickHandler: function(event){
            this.vonec = this.vonec.split('').reverse().join('')
        }
    }
})
app.mount('#app')