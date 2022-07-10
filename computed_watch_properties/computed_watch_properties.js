const app = Vue.createApp({
    data: () => ({
        computedMsg: 'Hello computed Vue.js!',
        basePrice: 100,
        watchMessage: 'Hello watch Vue.js!',
        kmValue: 0,
        mValue: 0,
        cLastName: '',
        cFirstName: '',
        wLastName: '',
        wFirstName: '',
        wfullName: '',
        colors: [
            {name: 'Red'},
            {name: 'Green'},
            {name: 'Blue'},
        ]
    }),
    computed: {
        reversedMessage: function() {
            return this.computedMsg.split('').reverse().join('')
        },
        taxIncludedPrice: {
            get: function() {
                return this.basePrice * 1.1
            },
            set: function(value) {
                this.basePrice = value / 1.1
            }
        },
        computedNumber: function() {
            return Math.random()
        },
        cFullName: function() {
                return this.cLastName + ' ' + this.cFirstName
        }
    },
    methods: {
        methodsNumber: function() {
            return Math.random()
        },
        onClick: function() {
            this.colors[1].name = 'White'
        }
    },
    watch: {
        watchMessage: function(newValue, oleValue) {
            console.log('new: %s, old: %s', newValue, oleValue)
        },
        kmValue: function(value) {
            console.log(value)
            this.kmValue = value
            this.mValue = value * 1000
        },
        mValue: function(value) {
            console.log(value)
            this.mValue = value
            this.kmValue = value / 1000
        },
        wFirstName: function(value) {
            this.wfullName = this.wLastName + ' ' + value
        },
        wLastName: function(value) {
            this.wfullName = value + ' ' + this.wFirstName
        },
        colors: {
            handler: function(newValue, oleValue) {
                console.log('Update!')
            },
            deep: true
        }
    }
})
app.mount('#app')