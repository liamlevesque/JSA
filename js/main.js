$(function(){

	$('.lot-thumb-image').mouseenter(function(e){
		var y = $(e.currentTarget).offset().top - 80; 
		$('.js-hoverimage').css({"display":"block","top":y+"px"});
	}).mouseleave(function(e){
		$('.js-hoverimage').css("display","none");
	});
});