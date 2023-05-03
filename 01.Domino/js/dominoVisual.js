(()=>{
    const slider = $('.visual').bxSlider({
        auto: true,
        speed:1000,
        autoHover : true,
        responsive : true,
        pager: true,
        pagerType: 'short',
        stopAutoOnClick: false,
        keyboardEnabled:true,

        onSliderLoad: function(){
            // 클론 슬라이드 탭 방지
            $(".bx-clone").find("a").prop("tabIndex","-1");
        },

        onSlideAfter: function(){
            // 아리아 히든 옵션이 있을경우 탭 방지
            $(".visual").children("li").each(function(){
                if($(this).attr("aria-hidden") == "false"){
                    $(this).find("a").attr("tabIndex","0");
                }else{
                    $(this).find("a").attr("tabIndex","-1");
                }
            });
        }
    });
    
    const prevBtn = $('.bx-prev')
    prevBtn.on('click' , ()=> {
        slider.stopAuto(false)
        timeout = setTimeout(()=>{
            slider.startAuto(false)
        },3000)
    })
    
    
    const nextBtn = $('.bx-next')
    nextBtn.on('click' , ()=> {
        slider.stopAuto(false)
        timeout = setTimeout(()=>{
            slider.startAuto(false)
        },3000)
    })

    $('.visual a').focusin(function () {
        slider.stopAuto();
    });
})()