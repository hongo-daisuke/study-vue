const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js !',
        textares: 'ここはテキストエリアです',
        checked: false,
        Colors: ['Red', 'Green', 'Blue', 'Black', 'White'],
        selectColors: [],
        radioColor: '',
        selected: '',
        mult_selected: [],
        lazyMessage: '',
        trimMessage: '',
        age: 0

    })
})
app.mount('#app')