const app = Vue.createApp({
    data: () => ({
        isLarge: true,
        hasError: true,
        largeClass: 'large',
        dengerClass: 'text-danger',
        classObject: {
            large: true,
            'text-danger': true
        },
        largeClassOperator: {
            large: true,
            'bg-gray': true
        },
        dengerClassOperator: {
            'text-danger': true
        },
        largeOperator: true,
        color: 'blue',
        fontSize: 36,
        styleObject: {
            color: 'green',
            fontSize: '48px',
        }
    })
})
app.mount('#app')