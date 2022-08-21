function dis(){
    if($('.bar').css('display') == 'none'){
        $('.bar').show();
        $('.nav_button').animate({
            right : '10px'
        })
    }else{
        $('.bar').hide();
        $('.nav_button').animate({
            right : '130px'
        })
    }
}