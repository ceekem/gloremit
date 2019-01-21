/* $(document).ready(function() {
  
    var slides = $(".slide");
    
    //Init slide 1
    slideTo(slides[0]);
    
    var slideIndex = 0;
    var slideTime = animate();
    
    $(".slide").click(function() {
      //Reset the interval to 0 and start it again
      clearInterval(slideTime);
      slideTime = animate();
      
      
      var selectedIndex = $(this).index();
      var slide = slides[selectedIndex];
      slideTo(slide);
      
    });
    
    function slideTo(slide) {
       $(".slide").removeClass("hero1");
        $(slide).addClass("hero2");
        slideIndex = jQuery(slide).index(); 
    }
    
    function animate() {
      return setInterval(function() {
                var slide = slides[slideIndex];
                slideTo(slide)
                slideIndex++;
                if (slideIndex == slides.length) {
                  slideIndex = 0; 
                }
            }, 5000);
    }
    
    

}); */

$(document).ready(function(){
    $(".slider").addClass("hero1");
    setTimeout(autoAddClass, 1000);
});

function autoAddClass(){
var next = $(".hero1").removeClass("hero2").next();
if(next.length)
    $(next).addClass('hero2');
else
    $('.slider').addClass('hero3');
setTimeout(autoAddClass, 1000);
}