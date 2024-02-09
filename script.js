let phrases = [
	"Are u sure?",
	"Are u really sure?",
	"Pleeeeasseeee say yes🙏",
	"Think abt it",
	"If u say no, I'll be sad :(",
	"I'll be very very sad :(",
	"I'll be very very very sad :(",
	"U don't wanna be my valentine? 😔",
];

let phraseCounter = 0;

function Yes() {
	let buttons = document.body.getElementsByTagName("button");
	console.log(buttons);
	for (let i = 0; i < buttons.length; i++)
	{
		buttons[i].style.display = "none";
	}
	
	// let button = document.getElementById("yes");
	// button.style.width = "100px";
	// button.style.height = "75px";
	// button.style.fontSize = "13.33px";

	let gif = document.getElementById("gif");
	gif.src = "giphy.gif";

	let msg = document.getElementById("msg");
	msg.innerHTML = "Yaaaaayyyyyyyyyyy";
}

function No() {
	let growthAmount = 30;
	let button = document.getElementById("yes");
	let width = button.offsetWidth+growthAmount;
	let height = button.offsetHeight+growthAmount;
	let fontSize = parseFloat(window.getComputedStyle(button, null).getPropertyValue("font-size"));
	button.style.fontSize = (fontSize+growthAmount/2) + "px";
	button.style.width = width.toString() + "px";
	button.style.height = height.toString() + "px";

	let msg = document.getElementById("msg");
	phraseCounter = (phraseCounter == phrases.length-1) ? 0 : phraseCounter+1;
	console.log(phraseCounter);
	msg.innerHTML = phrases[phraseCounter];
}






























