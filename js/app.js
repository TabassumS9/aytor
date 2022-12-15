$(function(){

  //'*BANNER SLIDER
  $('#banner').slick({
     arrows:false,
     dots:true,
  });
  
  $(".product_slider").slick({
     slidesToShow: 4,
     prevArrow: '.arrows .left',
     nextArrow: '.arrows .right',
  
     responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            
          }
        },
  
        {
           breakpoint: 991,
            settings: {
             slidesToShow: 3,
             
           }
         },
         
        {
           breakpoint: 767,
            settings: {
             slidesToShow: 2,
             
           }
         },
         {
           breakpoint: 450,
            settings: {
             slidesToShow: 1,
             
           }
         },
        
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  
  });
  
  
  
  })