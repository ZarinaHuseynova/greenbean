var button_1=$('.btn_div > a');
button_1.on('click' , function(){
    button_1.removeClass('active');
    $(this).addClass('active');
});