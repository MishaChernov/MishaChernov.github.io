$(document).ready(function(){
	
	var div = $('#charityCard');
	var scroller = setInterval(function(){
		
		if(div.scrollTop() + div.innerHeight() + 50 >= document.getElementById("charityCard").scrollHeight){
		div.animate({scrollTop: 0}, 1000);		
		}else{
		
		var pos = div.scrollTop();
		div.animate({scrollTop: pos + 150}, 1000);		
		// console.log("working");
		}
	}, 3000)
	
	// var gameT;

	// gameT = setInterval(gameswitch, 5000);
	
	// function gameswitch(){
		// alert("Hidden");
		// var c  = $('.cardGallery').index($('.cardGallery:visible'));
		// var cardId = $(".cardGallery:eq("+c+")").attr("id");
		// var cc = $('#'+cardId+' .subCards').length;
		
		// galleryView(cardId, cc, "next");
		
	// }
	
	// $(".cardGallery").on("mouseover", function(){
		// clearInterval(gameT);
	// });
		
	// $(".cardGallery").on("mouseleave", function(){
	// gameT = setInterval(gameswitch, 5000);
	// });
	
	$(function(){
		
		var abc = $("div.subCards").length;
		// alert(abc);
		for(var i = 0 ; i < abc ; i++){
			
			// console.log(i);
			stringFeed(i);
			
		}

	});
	
	function stringFeed(num){
		
			var rNum = getRandomInt(1, 100);
			// console.log(rNum);
			var fig;
			
			if(rNum >= 1 && rNum <=20){
				fig = 1;
			}
			if(rNum >= 20 && rNum <=40){
				fig = 2;
			}
			if(rNum >= 40 && rNum <=60){
				fig = 3;
			}
			if(rNum >= 60 && rNum <=80){
				fig = 4;
			}
			if(rNum >= 80 && rNum <=100){
				fig = 5;
			}
			
			$('.subCards:eq('+num+') .w3-container').after('<div class="starRating w3-row w3-light-grey"><div class="w3-col s9 m9 l9" style="padding:5px 0px;"><div class="star-ratings-sprite"><span style="width:'+rNum+'%" class="star-ratings-sprite-rating singleRate"></span></div></div><div class="w3-col s3 m3 l3" style="padding:7px 0px 5px 0px;"><i class="fa fa-shield w3-large rateNo" > '+fig+'</i></div></div>');
		
	}	
	
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	
	
	$(".subCards").tooltip({
		title:fetchData,
		html: true,
		
	});	

	function fetchData(){
		var one = "1,004,058 credits  ($10,041)";
		var two = "$4041";
		var three = "$2020 each";
		var fetch_data = '<p style="text-align:left;"><br><b>Current Game Value</b><br>'+one+'<br><br><b>40% donated to FIRST Robotics</b><br>'+two+'<br><br><b> Game Creator, Winner, goEDU</b><br>'+three+'<br></p>';
		return fetch_data;
	}
	
	$(document).on('click', 'a[href^="#"]', function (event) {
		event.preventDefault();

		$('html, body').animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 500);
	});
	
	onGalleryView(0, "prev");

	$(".linksVerify a").on("click", function(){
		if ($(':animated').length) {
			return false;
		}else{			
			var b = $(this).text();
			var a = $(this).attr("href");
			$(".cardGallery:visible").hide("slow");
			$("#"+a+" .subCards:lt(4)").show();					
			$("#"+a+"").show("slow");
			$("#gameCap").text(b);		
		}
	});

	// var feedt;
	
	// feedt = setInterval(feedTimer, 10000);
	
	// function feedTimer(){
		
		// if($('.bubble:visible:last').is($('.bubble:last'))){
				// $(".bubble").hide("slow");					
				// $(".bubble:first").show("slow");
		// }else{
		  // $(".bubble:visible").hide("slow").next().show("slow");
		 // }
		 
	// }
	
	
	// $(".bubble").on("mouseover", function(){
		// clearInterval(feedt);
	// });
		
	// $(".bubble").on("mouseleave", function(){
		// feedt = setInterval(feedTimer, 10000);
	// });
	
	$(".bubble:eq(0)").show("slow");

	$(".btnFeed").on("click", function(){
		if ($(':animated').length) {
			return false;
		}else{
		var a = $(this).attr("title");		
		if(a == "previous"){
	
		if($('.bubble:visible:first').is($('.bubble:first'))){
					$(".bubble").hide("slow");
					$(".bubble:last").show("slow");
			}else{
		      $(".bubble:visible").hide("slow").prev().show("slow")
			 }
		}
		if(a == "next"){
		if($('.bubble:visible:last').is($('.bubble:last'))){
					$(".bubble").hide("slow");					
					$(".bubble:first").show("slow");
			}else{
		      $(".bubble:visible").hide("slow").next().show("slow");
			 }		
		}
				
		}
	});	
	
	$( "button.cardButton" ).click(function() {
		if ($(':animated').length) {
			return false;
		}else{		
		var a = $( this ).attr( "title" );
	 
		var c  = $('.cardGallery').index($('.cardGallery:visible'));
		var cardId = $(".cardGallery:eq("+c+")").attr("id");
		var cc = $('#'+cardId+' .subCards').length;
		
		galleryView(cardId, cc, a);
		}
	});


	function galleryView(id, tl, d){

		if(d == "next"){
			if($('#'+id+' .subCards:visible:last').is($('#'+id+' .subCards:last'))){
				$('#'+id+' .subCards:visible').hide("slow");
				$('#'+id+' .subCards:lt(4)').show("slow");
			}else{
			$('#'+id+' .subCards:visible:first').hide("slow");
			$('#'+id+' .subCards:visible:last').next().show("slow");
			}
		}
		if(d == "prev"){
			if($('#'+id+' .subCards:visible:first').is($('#'+id+' .subCards:first'))){
			return false;
		}else{
			$('#'+id+' .subCards:visible:first').prev().show("slow");
			$('#'+id+' .subCards:visible:last').hide("slow");
			}
		}

	}
	
	function onGalleryView(n, d){
		if(d == "prev"){
			$(".cardGallery:eq("+n+")").addClass("animated slideInUp");
			$(".cardGallery:eq("+n+")").show("slow");
			$(".cardGallery:eq("+n+") .subCards:lt(4)").show("slow");			
		}

	}
	
});

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button
function w3_close() {
    mySidebar.style.display = "none";
}


$(".subTools").tooltip({
		title:fetchTools,
		html: true,
		placement: "right",
});	

function fetchTools(){
		
		var fetch_data = '<p style="text-align:left;"><br><b>Tools</b><br></p>';
		return fetch_data;
}


$(".Filter").tooltip({
		title:fetchFilters,
		html: true,
});	

function fetchFilters(){
		
		var fetch_data = '<p style="text-align:left;"><br><b>Details</b><br></p>';
		return fetch_data;
}