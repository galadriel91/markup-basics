(()=>{
    const header = document.querySelector('.header')
    const fixed = "Fixed";

    function fixedHeader(){
        if(window.scrollY >= 150){
            header.classList.add(fixed);
        }else{
            header.classList.remove(fixed);
        }
    }
    window.addEventListener('scroll' , fixedHeader);
})();