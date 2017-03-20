// When the document is ready
$(document).ready(function(){
$(".ArtistInfo").mouseenter(function(){
// Show div overlay of text
$(".artistOverlay").css("margin-left","0px");
  });
$(".ArtistInfo").mouseleave(function(){
  $(".artistOverlay").css("margin-left","-400px");
  });
$(".VenueInfo").mouseenter(function(){
  $(".venueOverlay").css("margin-left", "0px");
  });
$(".VenueInfo").mouseleave(function(){
  $(".venueOverlay").css("margin-left","300px");
});
$(".MoreInfo").mouseenter(function(){
  $(".moreOverlay").css("margin-top","0px");
});
$(".MoreInfo").mouseleave(function(){
  $(".moreOverlay").css("margin-top","300px");
});

$("#Facebook").mouseenter(function(){
  $(this).css("opacity","0.9");
});
$("#Facebook").mouseleave(function(){
  $(this).css("opacity","0.3");
});
$("#Instagram").mouseenter(function(){
  $(this).css("opacity","0.9");
});
$("#Instagram").mouseleave(function(){
  $(this).css("opacity","0.3");
});
$("#Twitter").mouseenter(function(){
  $(this).css("opacity","0.9");
});
$("#Twitter").mouseleave(function(){
  $(this).css("opacity","0.3");
  });
});
