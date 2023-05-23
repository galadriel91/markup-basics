(()=>{
    // 헤더 스크롤
    const header = document.querySelector('.header')
    const fixed = "fixed";

    const fixedHeader = () => {
        if(scrollY >= 150){
            header.classList.add(fixed);
        }else{
            header.classList.remove(fixed);
        }
    }

    window.addEventListener('scroll' , fixedHeader);

    // 헤더 메뉴 버튼
    const menuBtn = document.querySelector('.menu')
    const mobileMenu = document.querySelector('.mobileGnb')
    const handleMenu = () =>{ 
        if(menuBtn.classList.contains('xi-bars')){
            menuBtn.classList.remove('xi-bars')
            menuBtn.classList.add('xi-close')
            mobileMenu.classList.add('on')
            document.body.classList.add('open')
        }else{
            menuBtn.classList.remove('xi-close')
            menuBtn.classList.add('xi-bars')
            mobileMenu.classList.remove('on')
            document.body.classList.remove('open')
        }
    }
    menuBtn.addEventListener('click' , handleMenu)

    const initMenu = () => {
        if(window.innerWidth > 900){
            menuBtn.classList.remove('xi-close')
            menuBtn.classList.add('xi-bars')
            mobileMenu.classList.remove('on')
        }
    }
    initMenu()
    window.addEventListener('resize' , initMenu)
})();