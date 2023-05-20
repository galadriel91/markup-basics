(()=>{
    const responsiveAlert = document.querySelector('.responsiveAlert')
    const alert = 'alert'

    const onScrollAlert = () => {
        if(window.innerWidth <= 1300){
            responsiveAlert.classList.add(alert)
        }else{
            responsiveAlert.classList.remove(alert)
        }
    }

    onScrollAlert()

    window.addEventListener('resize' , onScrollAlert)    
})();