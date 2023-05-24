(()=>{
    const prev = document.querySelectorAll('.today')
    const next = document.querySelectorAll('.tomorrow')
    const days = ['일', '월', '화', '수', '목', '금', '토']


    const today = new Date();
    const now = new Date();
    const tomorrow = new Date(now.setDate(now.getDate() + 1));

    const handleDay = ( value ) => {
        const year = value.getFullYear(); // 년
        const mon = (value.getMonth()+1); //월
        const date = value.getDate(); //일
        const day = value.getDay(); //요일
        const today = `${year}.${mon < 10 ? `0${mon}` : mon}.${date} (${days[day]})`
        return today
    }


    prev.forEach(v=>{
        v.innerText = handleDay(today)
    })

    next.forEach(v=>{
        v.innerText = handleDay(tomorrow)
    })

})()