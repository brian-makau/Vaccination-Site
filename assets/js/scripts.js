console.log("hello There");
/* About  Section */
$(document).ready(function() {
    $(".shown").click(function() {
        $(this).toggle();
        $(this).siblings().toggle();
    });
    $(".hidden").click(function() {
        $(this).toggle();
        $(this).siblings().toggle();
    })
})
/*  Contact  Section */