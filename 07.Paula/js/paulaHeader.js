(()=>{
    const header = document.querySelector('.header')
    
    const handleHeader = () => {
        if(window.scrollY >= 120){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    }

    const openBtn = document.querySelector('.openBtn')
    
    const handleMenu = () => {
        if(openBtn.classList.contains('xi-bars')){
            openBtn.classList.replace('xi-bars' , 'xi-close')
            openBtn.classList.add('active')
        }else{
            openBtn.classList.replace('xi-close', 'xi-bars')
            openBtn.classList.remove('active')
        }
    }

    openBtn.addEventListener('click' , handleMenu)
    window.addEventListener('scroll', handleHeader)
})()