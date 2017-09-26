$(document).ready(function(){

});

;

$(document).ready(function(){
    $('.parallax').parallax();
  });
      

  $('.carousel').carousel({
    padding: 200    
});
autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}