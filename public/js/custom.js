function draw(){
    const c=document.getElementById('mycanvas');
    const ctx=c.getContext('2d');      
    ctx.lineWidth=10;  
    ctx.strokeStyle='red';     
    ctx.beginPath();        
    ctx.moveTo(10,10);      
    ctx.lineTo(150,50);     
    ctx.stroke();
}


/*=========================================================
                      SERVICES
===========================================================*/
$(document).ready(function(){
   new WOW().init(); 
});

/*=========================================================
                      WORK
===========================================================*/

$(function () {
    $('#work').magnificPopup({
        delegate: 'a', 
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    const contentList = [
        {'index' : '1','urlIndex': 117},
        {'index' : '2','urlIndex': 116},
        {'index' : '3','urlIndex': 115},
        {'index' : '4','urlIndex': 114},
        {'index' : '5','urlIndex': 113},
        {'index' : '6','urlIndex': 111},
        {'index' : '7','urlIndex': 112},
        {'index' : '8','urlIndex': 109},
    ];
    $('.work-desc').click(function(){
        const index = this.dataset.index;
        const urlIndex = contentList.filter(v=> v.index===index)[0].urlIndex;
        window.open(`http://www.neg18.com/product/detail/id/${urlIndex}.html`, '_blank');
    });
});


/*=========================================================
                      TESTIMONIALS
===========================================================*/

$(document).ready(function(){
  $("#customers-cultures").owlCarousel({
        items:1,
        autoplay:true,
        smartSpeed:700,
        loop:true,
        autoplayHoverPause:true
  }
  );
});

/*=========================================================
                      TIMELINE
===========================================================*/
const contentList = [
        {'index' : '1','urlIndex': 90},
        {'index' : '2','urlIndex': 92},
        {'index' : '3','urlIndex': 91},
        {'index' : '4','urlIndex': 120},
    ];

$(document).ready(function(){
  $("#history li[data-index]").click(function(){
      const index = this.dataset.index;
      const urlIndex = contentList.filter(v=> v.index===index)[0].urlIndex;
      window.open(`http://www.neg18.com/news/detail/id/${urlIndex}.html`, '_blank');
  }
  );
});

/*=========================================================
                      STATS
===========================================================*/

$(function(){
    $('.counter').counterUp({
    delay: 10,
    time: 2000
});
})


/*=========================================================
                      NAVIGATION
===========================================================*/

$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50 ){
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        }
        else{
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});


$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        var section = $(this).attr("href");
        
        $('html, body').animate({
            scrollTop:$(section).offset().top - 64 }, 1250, "easeInOutExpo");
    })
});

$(function(){
    $(".navbar-collapse ul li a").on("click touch", function(){
       $(".navbar-toggle").click();
    });
})