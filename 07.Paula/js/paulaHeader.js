(()=>{
    const header = document.querySelector('.header')
    
    const handleHeader = () => {
        if(window.scrollY >= 120){
            header.classList.add('fixed')
        }else{
            header.classList.remove('fixed')
        }
    }

    window.addEventListener('scroll', handleHeader)
})()