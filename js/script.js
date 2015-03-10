var animationtime = 50;

$( document ).ready(function(){

	//start with everything hidden except for directory
	$("#leasing").hide();
	$("#management").hide();
	$("#history").hide();

	//set directory button to white
	//$("#directory-button").css("background-color", "white");
	$("#directory-button").addClass("menu-button-white");

	//add triangle class
	$("#directory-button").addClass("triangle");	
	$("#leasing-button").addClass("triangle");	
	$("#management-button").addClass("triangle");	
	$("#history-button").addClass("triangle");	
	
	//but make all but the one over the directory button transparent
	$("#leasing-button").addClass("triangle-transparent");	
	$("#management-button").addClass("triangle-transparent");	
	$("#history-button").addClass("triangle-transparent");	

	$( "#directory-button" ).click(function( event ){
		
		//fade button colors	
		$("#directory-button").addClass("menu-button-white");
		$("#leasing-button").removeClass("menu-button-white");
		$("#management-button").removeClass("menu-button-white");
		$("#history-button").removeClass("menu-button-white");
	
		/*	
		$( "#directory-button" ).animate({ backgroundColor: "#FFFFFF" }, animationtime );
		$( "#management-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		$( "#history-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		$( "#leasing-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		*/

		//hide all content except directory
		$("#leasing").hide();	
		$("#management").hide();
		$("#history").hide();
		$("#content").css("overflow-x", "hidden");
		$("#content").css("overflow-y", "visible");
	
		//remove transparency class on triangle
		$("#directory-button").removeClass("triangle-transparent");	
		
		//remove all of the triangles on other buttons
		$("#management-button").addClass("triangle-transparent");
		$("#leasing-button").addClass("triangle-transparent");
		$("#history-button").addClass("triangle-transparent");
	
		//show directory, triangle and scroller	
		$("#directory").slideDown("slow");
		$("#directory-button").addClass("triangle");
		$("#scroller").show();

	});

	$( "#leasing-button" ).click(function( event ){
		
		//fade button colors	
		$("#leasing-button").addClass("menu-button-white");
		$("#directory-button").removeClass("menu-button-white");
		$("#management-button").removeClass("menu-button-white");
		$("#history-button").removeClass("menu-button-white");
		
		/*
		//fade button colors	
		$( "#directory-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		$( "#management-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		$( "#history-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		$( "#leasing-button" ).animate({ backgroundColor: "#FFFFFF" }, animationtime );
		*/
		//hide all content except leasing info
		$("#directory").hide();
		$("#management").hide();
		$("#history").hide();
		$("#scroller").hide();
		$("#content").css("overflow-x", "hidden");
		$("#content").css("overflow-y", "hidden");
		
		//remove transparency class on leasing triangle
		$("#leasing-button").removeClass("triangle-transparent");	

		//make all the other buttons transparent	
		$("#directory-button").addClass("triangle-transparent");	
		$("#management-button").addClass("triangle-transparent");	
		$("#history-button").addClass("triangle-transparent");	
		
		//show leasing
		$("#leasing").slideDown("slow");
		$("#leasing-button").addClass("triangle");
	});
	
	$( "#management-button" ).click(function( event ){
		
		//fade button colors	
		$("#management-button").addClass("menu-button-white");
		$("#directory-button").removeClass("menu-button-white");
		$("#leasing-button").removeClass("menu-button-white");
		$("#history-button").removeClass("menu-button-white");
		
		/*
		//fade button colors	
		$( "#directory-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		$( "#management-button" ).animate({ backgroundColor: "#FFFFFF" }, animationtime );
		$( "#history-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		$( "#leasing-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		*/
	
		//hide everything except management info
		$("#directory").hide();
		$("#leasing").hide();
		$("#history").hide();
		$("#scroller").hide();
		$("#content").css("overflow-x", "hidden");
		$("#content").css("overflow-y", "hidden");
		
		//remove transparency class on management triangle
		$("#management-button").removeClass("triangle-transparent");	

		//make all the other buttons transparent	
		$("#directory-button").addClass("triangle-transparent");	
		$("#leasing-button").addClass("triangle-transparent");	
		$("#history-button").addClass("triangle-transparent");	
		
		//show management
		$("#management-button").addClass("triangle");
		$("#management").slideDown("slow");
	});
	
	$( "#history-button" ).click(function( event ){
		
		//fade button colors	
		$("#history-button").addClass("menu-button-white");
		$("#directory-button").removeClass("menu-button-white");
		$("#management-button").removeClass("menu-button-white");
		$("#leasing-button").removeClass("menu-button-white");
	
		/*	
		//fade button colors	
		$( "#directory-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		$( "#management-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		$( "#history-button" ).animate({ backgroundColor: "#FFFFFF" }, animationtime );
		$( "#leasing-button" ).animate({ backgroundColor: "#3d5e8d" }, animationtime );
		*/

		//hide everything except history info	
		$("#directory").hide();
		$("#leasing").hide();
		$("#management").hide();
		$("#content").css("overflow-x", "hidden");
		$("#content").css("overflow-y", "visible");
		
		//remove transparency class on history triangle
		$("#history-button").removeClass("triangle-transparent");	

		//make all the other buttons transparent	
		$("#directory-button").addClass("triangle-transparent");	
		$("#leasing-button").addClass("triangle-transparent");	
		$("#management-button").addClass("triangle-transparent");	
	
		//show history	
		$("#history-button").addClass("triangle");
		$("#history").slideDown("slow");
		$("#scroller").show();
	});

var step = 400;
var scrolling = false;
// Wire up events for the 'scrollUp' link:

$("#up").on("click", function (event) {
    // Animates the scrollTop property by the specified
    // step.
    $("#content").animate({
        scrollTop: "-=" + step + "px"
    });
     event.preventDefault();
})

$("#down").on("click", function (event) {
    $("#content").animate({
        scrollTop: "+=" + step + "px"
    });
     event.preventDefault();
})

function scrollContent(direction) {
    var amount = (direction === "up" ? "-=1px" : "+=1px");
    $("#content").animate({
        scrollTop: amount
    }, 1, function () {
        if (scrolling) {
            scrollContent(direction);
        }
    });
}
});
