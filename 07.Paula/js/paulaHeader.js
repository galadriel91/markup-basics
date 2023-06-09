(()=>{
    const header = document.querySelector('.header')
    const listItem = document.querySelectorAll('.listItem')
    const title = document.querySelector('.title')
    let first = 0

    const handleHeader = () => {
    //  스크롤 아래로 내릴시 fixed 부여
        if(window.scrollY >= 120){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    }

    const openBtn = document.querySelector('.openBtn')
    const desktopGnb = document.querySelector('.desktopGnb')
    const blockWrap = document.querySelector('.blockWrap')


    const openMenu = () => {
        openBtn.classList.replace('xi-bars' , 'xi-close')
        openBtn.classList.add('active')
        desktopGnb.classList.add('open')
        blockWrap.classList.add('open')
        document.body.classList.add('open')
    }

    const offMenu = () => {
        openBtn.classList.replace('xi-close', 'xi-bars')
        openBtn.classList.remove('active')
        desktopGnb.classList.remove('open')
        blockWrap.classList.remove('open')
        document.body.classList.remove('open')
    }


    const handleMenu = () => {
        // 메뉴 버튼 클릭시
        if(openBtn.classList.contains('xi-bars')){
            openMenu()
        }else{
            offMenu()
        }
    }

    const showingDepth = (e) => {
        // 리스트 클릭시 뎁스 아이템 등장
        let target = e.target
        while(target){
            if(target.classList.contains('listItem')){
                break
            }else{
                target = target.parentNode
            }
        }
        if(target.classList.contains('showing')){
            target.classList.remove('showing')
        }else{
            target.classList.add('showing')
        }
    }

    const checkWindowSize = () =>{
        // 1453px 보다 작을시 이벤트 부여
        if(window.innerWidth <= 1453){
            listItem.forEach(v=>v.addEventListener('click' , showingDepth))
            // 첫 로딩시 실행 방지를 위한 first
            first = 1
        }else{
            // 커지면 이벤트 제거
            if(first == 0){
                return
            }
            listItem.forEach(v=>v.removeEventListener('click' , showingDepth))
            listItem.forEach(v=>{
                if(v.classList.contains('showing')){
                    v.classList.remove('showing')
                }
            })
            title.focus()
        }
    }
    checkWindowSize()

    const handleResize = () => {
        checkWindowSize()
        if(window.innerWidth >= 1453){
            offMenu()
        }
    }

    openBtn.addEventListener('click' , handleMenu)
    window.addEventListener('scroll', handleHeader)
    window.addEventListener('resize' , handleResize)
})()