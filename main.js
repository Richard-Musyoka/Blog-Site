
const responsive={
	0:{
		items:1
	},

	320:{
		items:1
	},
	560:{
		items:2
	},
	960:{
		items:3
	}
}


$(document).ready(function(){

$nav = $('.nav');
$toggleCollapse = $('.toggle-collapse');


$toggleCollapse.click(function(){

$nav.toggleClass('collapse');

});

//Owl Carousel For Blog
$('.owl-carousel').owlCarousel({

	loop:true,
	autoplay:true,
	autoplayTimeout:3000,
	dots:true,
	// nav:true,
	// navText:[$('.owl-nav-prev'),$('.owl-nav-next')]
	responsive:responsive
});

// click to scroll top||
$('.move-up span').click(function(){

	$('html,body').animate({
		scrollTop:0
	},1000);
})
// AOS instance
AOS.init();

});