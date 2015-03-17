	 var timeoutID;
	 
	function setup() {

	    this.addEventListener("keypress", resetTimer, false);

	 
	    startTimer();
	}
	setup();
	 
	function startTimer() {
		
	    timeoutID = window.setTimeout(goInactive, 2000);
	}
	 
	function resetTimer(e) {
	    window.clearTimeout(timeoutID);
	 
	    goActive();
	}
	 
	function goInactive() {
	
		$('body').animate({"opacity":"0"},2000,function(){
					            window.location.href = "Welcomescreen.html";
					            });
	
	}
	 
function goActive() {
	         
    startTimer();
}   
