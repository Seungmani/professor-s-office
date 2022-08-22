function dis(){
    if($('.nav_bar').css('right') != '0px'){
        $('.nav_bar').animate({
            right : '0px'
        })
    }else{
        $('.nav_bar').animate({
            right : '-300px'
        })
    }
}