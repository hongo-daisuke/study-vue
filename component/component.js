// ローカルコンポーネント
const localConponent = {
    template: '<p>Hello! Local!</p>'
}

// ローカルコンポーネント
const buttonCouner = {
    template: '<div><span>count: </span><button v-on:click="countUp">{{ count }}</button></div>',
    data: () => ({
        count:0
    }),
    methods: {
        countUp: function(event){
            this.count++
        }
    }
}


const app = Vue.createApp({
    data: () => ({
    }),
    components: {
        'hello-component-l': localConponent,
        'button-counter': buttonCouner
    }
})
// グローバル登録のコンポーネント
app.component('hello-component-g', {
    template: "<p>Hello! Global</p>"
})
app.mount('#app')