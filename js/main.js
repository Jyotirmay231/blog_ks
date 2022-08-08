$(document).ready(function() {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // click event on togglr 

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })


});