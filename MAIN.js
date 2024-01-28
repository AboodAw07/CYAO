let yesButton;
let noButton;
let state;
let question;


function preload() {
	img = loadImage('Space-Invaders.webp');
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	
	let col1 = color('#4CAF50')
	let col2 = color('#F44336')
	let buttonstyle = "font-size: 24px; padding: 10px 20px; border: none; cursor: pointer; margin: 10px;";

	yesButton = createButton('Yes!');
	yesButton.style(buttonstyle + "background-color:" + col1);
	yesButton.position(width / 2 - 100, height - 100);
	yesButton.mousePressed(yes);

	noButton = createButton('No!');
	noButton.style(buttonstyle + "background-color: " + col2);
	noButton.position(width / 2 + 20, height - 100);
	noButton.mousePressed(no);

	state = "Start"
	question = "Start game?"
}


function draw() {
	background(0);
	textSize(22);
	textAlign(CENTER, CENTER)
	fill(255)
	text(question, width / 2, height / 2)
	image(img, width / 2.2, height / 10, 200, 230)
}


function yes() {
	
	if (state == 'Start' || state == 'm') {
		state = "a";
		question = "You stand before Wayne Manor, an eerie, old house inside a forest. Do you enter (Yes) or go back to the forest (No)?"
		img = loadImage('63544c2ac44cc770e0c12755524ef466e33836e3_2000x2000.webp');
	} else if (state == 'a') {
		state = "b";
		question = "You push the creaking door open. Voices reach out to you. Find light (Yes) or call out (No)"
		img = loadImage('istockphoto-1159984202-612x612.jpg');
	} else if (state == 'b') {
		state = "c";
		question = "The lights scares the ghosts away. Venture deeper (Yes) or follow the voices (No)?"
		img = loadImage('attachment-Haunted-House.png');
	} else if (state == 'c') {
		question = "You go deeper in the house and find yourself inside an old yet clean living room. Explore (Yes) or venture deeper (No)?"
		state = "g";
		img = loadImage('5c70dc81f9a942c3bfb0bc1955f759df.jpg');
	} else if (state == 'g') {
		question = "In the living room, you find old toys that remind you of your past, but the voices still call for you. Investigate toys (Yes) or reach out to the voices (No)"
		state = "r";
		img = loadImage('Youre-not-afraid-of-the-dark-are-you-Creepy-carriage-at-spooky-abandoned-manor-house.jpg');
	} else if (state == 'r') {
		question = "Scared,The closer you get to the toys,the more in touch with reality you feel. Voices call out for you one last time. Grab the toys (Yes) or call out to the voices (No)"
		state = "d";
		img = loadImage('6851472390_213014ca72_b.jpg');
	} else if (state == 'd') {
		question = "You wake up. You are in a hospital bed. Doctors tell you were in a coma for many years. Something seems off... You can still hear the voices... GAME OVER"
		img = loadImage('pov-of-a-man-that-just-woke-from-a-coma-in-a-hospi.jpg');
		//created usig AI Image Editor
		window.alert('GAME OVER')
	}
	
}


function no() {
	if (state == 'a') {
		question = "You run from the house but the path leads deeper into a dark forest. Return to Blackwood Manor (Yes) or go further in (No)?"
		state = "m";
		img = loadImage('dark_forest_by_smekalov_d6ppm0g-pre.jpg');
	} else if (state == 'm') {
		question = "While running in the forest, wolves catch up to you. GAME OVER"
		window.alert('GAME OVER')
		img = loadImage('valentin-tyustin-wolfe6.jpg');
	} else if (state == 'b') {
		question = "You call out, ghosts appear before you and steal your soul. GAME OVER"
		window.alert('GAME OVER')
		img = loadImage('Dementor_WB_F3_DementorAttacksHarry_Still_100615_Land.jpg');
	} else if (state == 'c') {
		question = "You venture further, but fall into a trap. GAME OVER"
		window.alert('GAME OVER')
		img = loadImage('valentin-tyustin-wolfe6.jpg');
	} else if (state == 'g') {
		question = "You venture deeper into the house, ghosts appear before you and steal your soul. GAME OVER"
		window.alert('GAME OVER')
		img = loadImage('Dementor_WB_F3_DementorAttacksHarry_Still_100615_Land.jpg');
	} else if (state == 'r') {
		question = "You call out, ghosts appear before you and steal your soul. GAME OVER"
		window.alert('GAME OVER')
		img = loadImage('360_F_567721271_mfAcSiDO815dELvS9RefbdYGT8nBM0u0.jpg');
	}

}