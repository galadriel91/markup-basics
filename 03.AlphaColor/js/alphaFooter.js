(()=>{
    const goTopContainerBtn = document.querySelector('.goTopContainerBtn')
    goTopContainerBtn.addEventListener('click', ()=>{
        window.scroll({
            behavior:'smooth',
            left:0,
            top:0
        })
    }) 
})()