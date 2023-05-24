(()=>{
    const responsiveAlert = document.querySelector('.responsiveAlert')
    const alert = 'alert'

    const onScrollAlert = () => {
        if(window.innerWidth <= 1300){
            responsiveAlert.classList.add(alert)
            document.body.classList.add('on')
        }else{
            responsiveAlert.classList.remove(alert)
            document.body.classList.remove('on')
        }
    }

    onScrollAlert()

    window.addEventListener('resize' , onScrollAlert)
})()