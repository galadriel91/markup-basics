(()=>{
    const NavList = document.querySelectorAll('.nav-list')
    const title = document.querySelector('.title')
    const On = 'on'
    let first = 0
    let classTarget = null
    
    const onHandleClick = (e) => {
        if(classTarget === e.target.parentNode){
            classTarget.classList.toggle(On)
        }else{
            NavList.forEach(v=>v.classList.remove(On))
            classTarget = e.target.parentNode
            classTarget.classList.toggle(On)
        }
    }

    const checkWindowSize = () =>{
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
            headerBottom.classList.remove('open')
            title.focus()
        }
    }
    checkWindowSize()
    window.addEventListener('resize' , checkWindowSize)

    const responsiveButton = document.querySelector('.responsiveButton')
    const headerBottom = document.querySelector('.headerWrapBottom')
    const responsiveButtonClick = () => {
        headerBottom.classList.toggle('open')
    }
    responsiveButton.addEventListener('click' , responsiveButtonClick)
})()
