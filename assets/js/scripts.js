console.log("hello There");
/* About  Section */
$(document).ready(function() {
    $(".shown").click(function() {
        $(this).toggle(2000);
        $(this).siblings().toggle(2000);
    });
    $(".hidden").click(function() {
        $(this).toggle(2000);
        $(this).siblings().toggle(2000);
    })
})
/*  Contact  Section */