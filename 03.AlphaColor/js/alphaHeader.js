(()=>{
    const NavList = document.querySelectorAll('.nav-list')
    const title = document.querySelector('.title')
    const On = 'on'
    let first = 0
    let classTarget = null
    

    // li > a 구조
    // 그래서 a클릭시 target.parentNode가 li가 나온다.
    const onHandleClick = (e) => {
        // 똑같은 리스트를 클릭했을 경우 닫기 위해서
        if(classTarget === e.target.parentNode){
            classTarget.classList.toggle(On)
        }else{
            // 다른 것을 클릭했을 경우 기존 클래스 제거 후 붙이기.
            NavList.forEach(v=>v.classList.remove(On))
            classTarget = e.target.parentNode
            classTarget.classList.toggle(On)
        }
    }

    const checkWindowSize = () =>{
        // 브라우저 크기가 1000 미만인 경우
        // 각각의 네비게이션에 클릭 이벤트 부여
        if(window.innerWidth <= 1000){
            NavList.forEach((v)=>{
                v.addEventListener('click' , onHandleClick)
            })
            first = 1
        }else{
            if(first == 0){
                return
            }
            classTarget = null
            NavList.forEach(v=>{
                v.classList.remove(On)
                v.removeEventListener('click' , onHandleClick)
            })
            document.body.classList.remove('open')
            headerBottom.classList.remove('open')
            title.focus()
        }
    }
    checkWindowSize()
    window.addEventListener('resize' , checkWindowSize)

    // 네비게이션 버튼 열고 / 닫기 및 바디 스크롤 on / off
    const responsiveButton = document.querySelector('.responsiveButton')
    const headerBottom = document.querySelector('.headerWrapBottom')
    const handleToggleBtn = () => {
        NavList.forEach(v=>v.classList.remove(On))
        document.body.classList.toggle('open')
        headerBottom.classList.toggle('open')
    }
    responsiveButton.addEventListener('click' , handleToggleBtn)
})()
