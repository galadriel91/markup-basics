(()=>{
    const upBtn = document.querySelector('.goUp')

    const handleScroll = () => {
        if(window.scrollY > 150){
            upBtn.classList.add('show')
        }else{
            upBtn.classList.remove('show')
        }
    }

    window.addEventListener('scroll', handleScroll)
    upBtn.addEventListener('click', ()=>{
        window.scrollTo({
            top:0, 
            left:0, 
            behavior:'smooth'
        })
    })
})()