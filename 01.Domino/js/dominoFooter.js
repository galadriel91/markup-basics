const footer = new Vue({
    el:'#footer',
    data:{
        close:true,
        state:'',
    },
    methods:{
        // 모달 클릭시 사라짐
        onClickClose(){
            this.close = false
        },
        // 버튼 클릭시 최상단 이동
        onClickUp(){
            window.scroll({
                behavior: 'smooth',
                top:document.body.offsetTop
            })
        },
        // 스크롤시 최상단 버튼 유/무 효과
        onScroll(){
            if(window.pageYOffset >= 150){
                this.state = "scroll"
            }else{
                this.state = ""
            }
        }
    },
    mounted(){
        window.addEventListener('scroll' , this.onScroll)
    }
})