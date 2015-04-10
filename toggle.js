$(function () {
    $('.toggle').click(function(){
        $('.span4').slideToggle();

        if ($('.toggle').text() == "←") {
            $('.toggle').text("→");
        } else {
            $('.toggle').text("←");
        }
    });
});
