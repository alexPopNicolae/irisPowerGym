$(document).ready(function(){
    //functia pentru hamburger menu
    $('.hamburger_menu').on('click', function(){
        console.log("Am apasat pe butonul nostru");
    });

    $('.day').on('click', function(){
        console.log("Ai apasat pe " + $(this).text());
    });

});
