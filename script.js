var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

//body.style.background = "red"; //changes the style of the body 
//console.log(body);
//console.log(css);
//console.log(color1);
//console.log(color2);

function setGradient(){ //this makes code cleaner less lines of repeated code
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")"; 

	css.textContent = body.style.background + ";"; //modifies text in H3 it adds text content
}

//color1.addEventListener("input", setGradient);//{ //input is an event, everytime the input value changes we can detect that
	//we dont need to call the function because input event gets called automatically and the 2nd parameter gets ran with the event input
	//body.style.background = //when the 1st input changes 
	//"linear-gradient(to right, " 
	//+ color1.value 
	//+ ", " 
	//+ color2.value 
	//+ ")"; 
//})


//color2.addEventListener("input", setGradient);//{ //we wnt setGradient to be called all the time so we make it a 2nd parameter
	//body.style.background = 
	//"linear-gradient(to right, " 
	//+ color1.value 
	//+ ", " 
	//+ color2.value 
	//+ ")"; 
	
//})

//anytime color1 changes we want to grab the bacground style