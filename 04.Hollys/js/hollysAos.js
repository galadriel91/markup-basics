AOS.init({
    once: true,
});

window.addEventListener('resize' , ()=>{
    setTimeout(()=>{
        AOS.refresh()
    },200)
})