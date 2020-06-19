let sources;

function setup() {
  createCanvas(960, 480);
  addSourceButton = createButton("Add source");
  addSourceButton.mousePressed(handleAddSourcePress);
  sources = new Sources();
}

function handleAddSourcePress() {
  sources.add();
}

function draw() {
  background(0);
  sources.display();
}

function keyPressed(e) {
  if (e.key === "Delete") {
    sources.deleteCurrentlySelected();
  }
}
