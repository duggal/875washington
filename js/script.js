$( document ).ready(function(){

	//start with everything hidden except for directory
	$("#leasing").hide();
	$("#management").hide();
	$("#history").hide();
	
	$( "#directory-button" ).click(function( event ){
	
		//hide everything except directory
		$("#leasing").hide();	
		$("#management").hide();
		$("#history").hide();
	
		//show directory and scroller	
		$("#directory-table").show();
		$("#scroller").show();

	});

	$( "#leasing-button" ).click(function( event ){
		//hide everything except leasing info
		$("#directory-table").hide();
		$("#management").hide();
		$("#history").hide();
		$("#scroller").hide();
		
		//show leasing
		$("#leasing").show();
	});
	
	$( "#management-button" ).click(function( event ){
		//hide everything except leasing info
		$("#directory-table").hide();
		$("#leasing").hide();
		$("#history").hide();
		$("#scroller").hide();
		
		//show management
		$("#management").show();
	});
	
	$( "#history-button" ).click(function( event ){
		$("#directory-table").hide();
		$("#leasing").hide();
		$("#management").hide();
	
		//show history	
		$("#history").show();
		$("#scroller").show();
	});

	var step = 200;
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
