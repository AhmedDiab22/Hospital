$(function (){
    var he = $('.Header').innerHeight();
    var li = $('.links').innerHeight();
   
   $('.carousel , .carousel-item , .item1').height($(window).height() - (he + li)); 
   
   $('.links ul li a').on('click' , function (){
        $(this).addClass('active').siblings().removeClass('active');
   
});
});
