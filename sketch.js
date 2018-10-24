var mic;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  var myText = 'Speak for yourself!';
  fill(162, 11, 11);
  textSize(72);
  textFont('Chivo');
  textAlign(CENTER);
  text(myText, windowWidth / 2, windowHeight / 2);

  var vol = mic.getLevel();
  rect(windowWidth/2-100, windowHeight/2+100, 200, vol * 300);

}
