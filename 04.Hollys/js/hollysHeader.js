(()=>{
    const headerNavItem = document.querySelectorAll('.headerNavItem')

    const showingDepth = (e) => {
        headerNavItem.forEach(v=>{
            if(v.classList.contains('active')){
                v.classList.remove('active')
            }
        })
        let target = e.target
        while(target){
            if(target.classList.contains('headerNavItem')){
                break
            }else{
                target = target.parentNode
            }
        }
        if(target){
            target.classList.add('active')
        }
    }

    const removeDepth = () => {
        headerNavItem.forEach(v=>v.classList.remove('active'))
    }

    const checkWindowSize = () =>{
        if(window.innerWidth > 1220){
            headerNavItem.forEach(v=>v.addEventListener('mouseenter' , showingDepth))
            headerNavItem.forEach(v=>v.addEventListener('keyup' , showingDepth))
            headerNavItem.forEach(v=>v.addEventListener('mouseleave' , removeDepth))
        }else{
            headerNavItem.forEach(v=>v.removeEventListener('mouseenter' , showingDepth))
            headerNavItem.forEach(v=>v.removeEventListener('keyup' , showingDepth))
            headerNavItem.forEach(v=>v.removeEventListener('mouseleave' , removeDepth))
        }
    }
    checkWindowSize()
    window.addEventListener('resize' , checkWindowSize)
})();

(()=>{
    // 변수
    const navOpenBtn = document.querySelector('.navOpenBtn')
    const navCloseBtn = document.querySelector('.navCloseBtn')
    const globalNav = document.querySelector('.headerWrapNav')
    
    // 반응형 클릭시 네비게이션 메뉴 등장
    navOpenBtn.addEventListener('click' , ()=>{
        globalNav.classList.add('navOpen')
        navCloseBtn.classList.add('closeOn')
    })
    // 반응형 클릭시 네비게이션 메뉴 숨김
    navCloseBtn.addEventListener('click' , ()=>{
        navCloseBtn.classList.remove('closeOn')
        globalNav.classList.remove('navOpen')
    })

    const checkWindowSize = () =>{
        if(window.innerWidth > 1000){
            navCloseBtn.classList.remove('closeOn')
            globalNav.classList.remove('navOpen')
        }
    }
    checkWindowSize()
    window.addEventListener('resize' , checkWindowSize)
})();
