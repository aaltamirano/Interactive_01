// Functions Needed:

// -Hover
// -Shape Extender
// -Blur
// -Something for smoke affect
// -Hover over then pop up function
// -Timer
// texture for the particle
var num = 2000;
var range = 20;

var ax = [];
var ay = [];


function setup()
{
	createCanvas(windowWidth, windowHeight);
	background(220,20,60);   

        for ( var i = 0; i < num; i++ ) {
    ax[i] = 365;
    ay[i] = 275+295;
  }
  frameRate(5); 
}




function draw(){   
    if (mouseIsPressed){
        txt();
    }
    
    // noLoop();
	fill(220, 118, 51);
	noStroke();
	//rect(200, 200, 40, 125, 20, 15, 10, 5, 20);

	//WHITE RECT FOR CIG
	fill(253, 254, 254);
	rect(353, 295, 20, 275);


    var names=["90% of smokers began before the age 19.", "About 30% of teen smokers will continue smoking and die early from a smoking-related disease.",
                "Teen smokers are more likely to have panic attacks, anxiety disorders and depression.", "Studies have found that nearly all first use of tobacco takes place before high school graduation.",
                 "On average, smokers die 13 to 14 years earlier than nonsmokers."];
    var name = random(names);
    

	if(mouseX > 353 && mouseX < 395 && mouseY > 295 && mouseY < 580){
		fill(253, 254, 254);
		rect(400, 295, 500, 275);

		textSize(18);
		textFont("Teko-Regular");

	    fill(0, 0, 0);

		text(name, 450, 425, 400, 100);

        //WHITE RECT FOR CIG
         fill(253, 254, 254);
         rect(windowWidth/4, 295, 42, 275);

	} else {
		background(127, 140, 141);

		fill(253, 254, 254);
		rect(windowWidth/4, 295, 42, 275);

		fill(220, 118, 51);
		noStroke();
		rect(windowWidth/4, windowHeight/4, 40, 125, 20, 15, 10, 5, 20);
	}

      // Shift all elements 1 place to the left
      for ( var i = 1; i < num; i++ ) {
        ax[i - 1] = ax[i];
        ay[i - 1] = ay[i];
      }

      // Put a new value at the end of the array
      ax[num - 1] += random(-range, range);
      ay[num - 1] += random(-range, range);

      // Constrain all points to the screen
      ax[num - 1] = constrain(ax[num - 1], 0, width);
      ay[num - 1] = constrain(ay[num - 1], 0, height);

      // Draw a line connecting the points
      for ( var j = 1; j < num; j++ ) {
        var val = j / num * 400.0 + 200;
        strokeWeight(10);
        stroke(105,105,105);
        line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
        stroke(128,128,128);
        line(ax[j - 1]+20, ay[j - 1]+20, ax[j], ay[j]);
        // stroke(169,169,169);
        // line(ax[j - 1]+40, ay[j - 1]+40, ax[j], ay[j]);
      }
    	
}

function txt() 
{
    textSize(32);
    text("If smoking continues at the current rate among youth in this country, 5.6 million of today’s Americans younger than 18 will die early from a smoking-related illness. That’s about 1 of every 13 Americans aged 17 years or younger alive today.", 30, 30, 90, 90);
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}

