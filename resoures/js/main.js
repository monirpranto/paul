$(function () {
    $('.hero_section').animatedHeadline({
        animationType: 'clip'
    });
    $('a').on('click', function () {
        $('html,body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }
            , 2000)
        return false;
    })
});
function openmenu() {
    document.getElementById('menu_container').style.width = "100%";
}
function closemenu() {
    document.getElementById('menu_container').style.width = '0%';
}
var mixer = mixitup('.portfolio_grid');

wow = new WOW(
    {
        boxClass: 'wow',     
        animateClass: 'animated', 
        offset: 0,         
        mobile: true,      
        live: true     
    }
)
wow.init();