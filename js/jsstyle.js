 $(document).ready(function() {



     var span1 = "WEB DESIGNER & DEVELOPER";
     var span2 = "GRAPHIC & UI/UX  DESIGNER";
     var span3 = "I CAN CREATE AWESOME WEBSITES";
     var text1 = $("#skills1");


     $(".fa-align-justify.fa1,.fa-align-justify.fa2").on("click", function() {
         // $(".toggle-menu").fadeIn(1000);
         $("#slideBar").css({ "width": "100%" });


     })

     $(window).on("resize", function() {
         if ($(this).width() > 992) {

             $("#slideBar").css({ "width": "0%" });
         }


     })
     $(".fa.fa-times").on("click", function() {
         $("#slideBar").css({ "width": "0%" });
     })

     $(".slide").on("click",function(){
        
     $("#slideBar").css({ "width": "0%" });

     })
     $(window).on("scroll load", function() {

         if ($(window).scrollTop() > 0) {
             $(".main").css({ "display": "none" });


             $("div.bg-color").css({ "position": "fixed" });
             $("div.bg-color").fadeIn(1500);

         } else {
             $(".main").fadeIn(500);
             $("div.bg-color").css({ "position": "absolute" });

             $("div.bg-color").fadeOut(400);

         }
     });


     (function noor() {
         text1.animate({ opacity: 1 }, 2000, function() {

             text1.delay(1000);
             text1.animate({ opacity: 0 }, 3000, function() {

                 text1.text("GRAPHIC & UI/UX  DESIGNER");
                 text1.animate({ opacity: 1 }, 2000, function() {

                     text1.delay(1000);
                     text1.animate({ opacity: 0 }, 3000, function() {

                         text1.text("create awesome websites");
                         text1.animate({ opacity: 1 }, 2000, function() {

                             text1.delay(1000);
                             text1.animate({ opacity: 0 }, 3000, function() {
                                 text1.text("WEB DESIGNER & DEVELOPER");

                                 text1.animate({ opacity: 1 }, 2000, function() { noor(); })
                             })
                         })
                     })
                 })
             });
         });
     }());



   $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
   $("#logo").on("click",function(){
    $(this).css("color","#f4ad24")
    $(this).siblings().css("color","#000");
    $(".logo").show();
    $(".des,.ill").fadeOut(150);
   })
   $("#des").on("click",function(){
    $(this).css("color","#f4ad24")
    $(this).siblings().css("color","#000");
    $(".des").show();
    $(".logo,.ill").fadeOut(150);
   })
   $("#ill").on("click",function(){
    $(this).css("color","#f4ad24")
    $(this).siblings().css("color","#000");
    $(".ill").show();
    $(".des,.logo").fadeOut(150);
   })
   $("#all").on("click",function(){
    $(this).css("color","#f4ad24")
    $(this).siblings().css("color","#000");
    $(".ill,.des,.logo").show();
    
   })

 });