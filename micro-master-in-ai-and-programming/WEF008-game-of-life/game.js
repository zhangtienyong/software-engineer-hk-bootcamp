const unitLength = 20;
const boxColor = 150;
const strokeColor = 50;
let columns;
let rows;
let currentBoard;
let nextBoard;

// Control Speed of the Game of Life with a Framerate Slider
let framerateSlider;
let framerateValue;

// Setup
function setup() {
  const canvas = createCanvas(windowWidth, windowHeight - 100);
  canvas.parent(document.querySelector("#canvas"));

  columns = floor(width / unitLength);
  rows = floor(height / unitLength);

  currentBoard = [];
  nextBoard = [];
  for (let i = 0; i < columns; i++) {
    currentBoard[i] = [];
    nextBoard[i] = [];
  }

  init();
  
  // Initialize the framerate slider element
  framerateSlider = select('#framerate-slider');
  framerateValue = select('#framerate-value');
  
  // Set an initial framerate
  frameRate(30);
  
  // Add an event listener to adjust the framerate when the slider changes
  framerateSlider.input(updateFramerate);
}

function updateFramerate() {
  const newFramerate = parseFloat(framerateSlider.value());
  frameRate(newFramerate);
  framerateValue.html(`${newFramerate} FPS`);
}

// Initialize/reset the board state
function init() {
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      currentBoard[i][j] = 0;
      nextBoard[i][j] = 0;
    }
  }
}

// Draw
function draw() {
  background(255);
  generate();

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      if (currentBoard[i][j] == 1) {
        fill(boxColor);
      } else {
        fill(255);
      }
      stroke(strokeColor);
      rect(i * unitLength, j * unitLength, unitLength, unitLength);
    }
  }
}

// Generate
function generate() {
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      let neighbors = 0;
      for (let i of [-1, 0, 1]) {
        for (let j of [-1, 0, 1]) {
          if (i == 0 && j == 0) {
            continue;
          }
          neighbors += currentBoard[(x + i + columns) % columns][(y + j + rows) % rows];
        }
      }

      // Rules of Life
      if (currentBoard[x][y] == 1 && neighbors < 2) {
        nextBoard[x][y] = 0;
      } else if (currentBoard[x][y] == 1 && neighbors > 3) {
        nextBoard[x][y] = 0;
      } else if (currentBoard[x][y] == 0 && neighbors == 3) {
        nextBoard[x][y] = 1;
      } else {
        nextBoard[x][y] = currentBoard[x][y];
      }
    }
  }

  [currentBoard, nextBoard] = [nextBoard, currentBoard];
}

// When mouse is dragged
function mouseDragged() {
  //If the mouse coordinate is outside the board
  if (mouseX > unitLength * columns || mouseY > unitLength * rows) {
    return;
  }
  const x = Math.floor(mouseX / unitLength);
  const y = Math.floor(mouseY / unitLength);
  currentBoard[x][y] = 1;
  fill(boxColor);
  stroke(strokeColor);
  rect(x * unitLength, y * unitLength, unitLength, unitLength);
}

// When mouse is pressed
function mousePressed() {
  noLoop();
  mouseDragged();
}

// When mouse is released
function mouseReleased() {
  loop();
}

document.querySelector("#reset-game").addEventListener("click", function () {
  init();
});
