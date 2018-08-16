$(document).ready(function(){
	if (document.body.clientWidth <= '800') {
		$('img.full').remove();    
	}


    $('.timer').countdown({
          digitWidth: 47,
          digitHeight: 50,
          image: 'images/hors.png'
     });
  // }
 $(window).resize(function(){
  
 })
	 $('.slider').slick({
	
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [    
    {
			breakpoint: 801,
			settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          
        }
    }
  ]
  });

function detect_mobile() {
    if( navigator.userAgent.match(/Android/i)
     || navigator.userAgent.match(/webOS/i)
     || navigator.userAgent.match(/iPhone/i)
     || navigator.userAgent.match(/iPad/i)
     || navigator.userAgent.match(/iPod/i)
     || navigator.userAgent.match(/BlackBerry/i)
     || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    } else {
        return false;
    }
}
var mobil=detect_mobile();
 

	 $('.slick-slide').click(function(){
	 	var chapter=$(this).attr('data-slick-index')+1;
	 	$('#reader').show();
    //Rider
    //Если десктоп

    if (!mobil){
	 	if($(window).width()>1024){
			  $(".reader-content").css({
				   "width": $(window).width()*0.7  + "px",
				   "height": $(window).height()*0.8 + "px",
					"margin-left": -($(window).width() - $(window).width()*0.3 ) / 2 + "px",
					"margin-top": -($(window).height() - $(window).height()*0.2) / 2 + "px"
               });
     $('.nav-wrapp,.text-wrap') .css({
         "max-height": $(window).height()*0.75 + "px"

     });
     $('.inner-wrapp').css({
         "width": $(window).width()*0.71 -250 + "px"

     });
     $('.nav-wrapp, .text-wrap').jScrollPane();
 }
 else{
    $(".reader-content").css({
		   "width": $(window).width()  + "px",
		   "height": $(window).height()+ "px",
		   "margin-left": -$(window).width() / 2 + "px",
		   "margin-top": -$(window).height() / 2 + "px"
   });
     $('.nav-wrapp,.text-wrap') .css({
         "height": $(window).height() + "px"

     });
     $('.inner-wrapp').css({
         "width": $(window).width() -250 + "px"

     });
     $('.nav-wrapp, .text-wrap').jScrollPane();
 }
}
//Если мобильник
 else {
    $('#desctop').css({'display' : 'none'});
    $('#reader').css({'position':'static'});
    $('.reader-content').addClass('is_mobil');
    $('.slider_reader').slick({
  
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight :1,
    mobileFirst:1
    
  });
    $('.slider').slick('unslick');
}   
	 })
	 $('.close').click(function(){
	 	$('#reader').hide().css({'position':''});
			$('.reader-content').removeClass('is_mobil');
			$('#desctop').show();
			if(mobil){
      $('.slider').slick({
  
				slidesToShow: 3,
				slidesToScroll: 1,
				responsive: [    
    {
				breakpoint: 801,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
          
        }
    }
  ]
  });
    }

	 });

	 $('ul#header_nav>li>a').click(function(){
   
        var idscroll = $(this).attr('href');
        $.scrollTo(idscroll, 1000);
        return false;
    });

   $('#visible').html($('#chapt_arr .chpt').eq(0).html())
	 $('.nav-wrapp ul li img').click(function(){

     if (document.body.clientWidth > '800'){

           var index=$('.nav-wrapp ul li').index($(this).parent());
           var src=$(this).attr('src');
           var find_coma=src.indexOf(".jpg");
           var new_src=src.substring(0,find_coma)+'_big.jpg';
           $('#main-img').hide().attr({'src':new_src}).fadeIn('slow');
           $('#chapt_namber').html($(this).siblings().text());
           $('#title_img').html($('#chapt_arr .chpt').eq(index).attr('data'));
          $('#visible').hide().html($('#chapt_arr .chpt').eq(index).html()).fadeIn('slow');
          var element = $('.text-wrap').jScrollPane();
            var api = element.data('jsp');
            api.reinitialise()
         
   
   }
   else{
    $('.nav-wrapp').hide()
   }
   });
  $('.slider_reader').on('afterChange', function(event, slick, nextSlide){
         $('#visible').hide().html($('#chapt_arr .chpt').eq(nextSlide).html()).fadeIn('slow');         

  });
  

})