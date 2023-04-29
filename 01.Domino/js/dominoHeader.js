(()=>{
    // //전체메뉴 버튼 토글 이벤트
    const wholeMenuBtn = document.querySelector('.wholeBtn');
    const wholeContainer = document.querySelector('.headerWholeMenu');
    const open = "open" ;
    const showing = "showing"

    const btnToggle = () => {
        wholeMenuBtn.classList.toggle(open);
        wholeContainer.classList.toggle(showing);
    }

    wholeMenuBtn.addEventListener('click' , btnToggle)
    // //전체메뉴 버튼 토글 이벤트 끝

    
    // 헤더 Fixed 이벤트
    const headerMiddle = document.querySelector('.headerMiddle')
    const headerBottom = document.querySelector('.headerBottom')
    
    const middleFixed = "middleFixed";
    const fixed = "fixed";

    const handleFixedScroll = () => {
        if(window.scrollY >= 150){
            headerMiddle.classList.add(middleFixed);
            headerBottom.classList.add(fixed);
        }else{
            headerMiddle.classList.remove(middleFixed);
            headerBottom.classList.remove(fixed);
        }
    }

    window.addEventListener('scroll' , handleFixedScroll);
})()