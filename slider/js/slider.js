var slideInt = 1;
var slideNext = 2;

$(document).ready(function(){
	$('#slider > #image1').fadeIn(300);
	startSlider();
});

function startSlider(){
	count = $('#slider > img').size();
	loop = setInterval(function(){
		if(slideNext > count){
			slideNext = 1;
			slideInt = 1;
		};
		$('#slider > img').fadeOut(300);
		$('#slider > img#image' + slideNext).fadeIn(300);
		
		slideInt = slideNext;
		slideNext = slideNext + 1;

	}, 3000);
};

function prev(){
	newSlide = slideInt - 1;
	showSlide(newSlide);
};

function next(){
	newSlide = slideInt + 1;
	showSlide(newSlide);
};

function stopLoop(){
	window.clearInterval(loop);
};

function showSlide(id){
	stopLoop();
	if(id > count){
		id = 1;
	}else if (id < 1){
		id = count;	
	}
	$('#slider > img').fadeOut(300);
	$('#slider > img#image' + id).fadeIn(300);
		
	slideInt = id;
	slideNext = id + 1;
	startSlider();
};

$('#slider > img').hover(
	function(){
		stopLoop();
	},
	function(){
		startSlider();
	}
	
);