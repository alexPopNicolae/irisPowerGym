$(document).ready(function(){
    //functia pentru hamburger menu
    $('.hamburger_menu').on('click', function(){
        console.log("Am apasat pe butonul nostru");
    });

    $('.day').on('click', function() {
        var currentDay = $(this);
        var position = currentDay.index();
        $('.day').removeClass('active');
        currentDay.addClass('active');

        $('.program').removeClass('active');
        $('.program').eq(position).addClass('active');
    });

});
