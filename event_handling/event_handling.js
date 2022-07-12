const app = Vue.createApp({
    data: () => ({
        count: 0,
        eventCount: 0,
        objectCount: 0,
        message: '',
        now: '-'
    }),
    methods: {
        clickHandler: function(){
            this.eventCount++
        },
        objectClick: function(event){
            // event.targetでクリックした要素を取得可能
            console.log(event.target)
            // <button>Click</button>

            // event.target.tagNammeでクリックしたタグ名を取得可能
            console.log(event.target.tagName)
            // BUTTON

            // event.target.innerHTMLでクリックしたコンテンツを取得可能
            console.log(event.target.innerHTML)
            // Click

            // event.target.typeでクリックしたイベントタイプを取得可能
            console.log(event.target.type)
            // submit

            // event.target.idでクリックしたidを取得可能
            console.log(event.target.id)
            // btn
        },
        argClickEvent: function($event, message){
            this.message = message
        },
        onClick: function(){
            this.now = new Date().toLocaleTimeString()
        }
    }
})
app.mount('#app')