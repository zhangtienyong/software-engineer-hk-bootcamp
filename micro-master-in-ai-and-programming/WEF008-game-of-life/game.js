const unitLength = 20;
const boxColor = 150;
const strokeColor = 50;
let columns;
let rows;
let currentBoard;
let nextBoard;

// Control Speed of the Game of Life with a Framerate Slider
let framerateSlider;

// Start Stop
let isRunning = false;
let startButton;
let stopButton;
let resetButton;
let randomizeButton;

// Define a darker color for stable cells
let stableColor = 100;

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

  // Initialize the buttons
  startButton = select('#start-button');
  stopButton = select('#stop-button');
  resetButton = select('#reset-button');

  // Add event listeners to start, stop, and reset the game
  startButton.mousePressed(startGame);
  stopButton.mousePressed(stopGame);
  resetButton.mousePressed(resetGame);

  // Initialize the randomize button
  randomizeButton = select('#randomize-button');

  // Add an event listener to trigger randomization
  randomizeButton.mousePressed(randomizeBoard);
}

function updateFramerate() {
  const newFramerate = parseFloat(framerateSlider.value());
  frameRate(newFramerate);
  framerateValue.html(`${newFramerate} FPS`);
}

function startGame() {
  isRunning = true;
  loop(); // Start the game loop
}

function stopGame() {
  isRunning = false;
  noLoop(); // Stop the game loop
}

function resetGame() {
  isRunning = false;
  noLoop(); // Stop the game loop
  init(); // Reset the game state
}

function randomizeBoard() {
  // Implement logic to randomly populate currentBoard
  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      currentBoard[i][j] = random() > 0.5 ? 1 : 0; // Randomly set cells to 1 or 0
    }
  }
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
        // Check if the cell is stable (not changing state)
        const isStable = currentBoard[i][j] === nextBoard[i][j];
        fill(isStable ? stableColor : boxColor);
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
  if (!isRunning) {
    loop(); // Start the game loop
  }
}

// When mouse is released
function mouseReleased() {
  if (!isRunning) {
    noLoop(); // Stop the game loop
  }
}

document.querySelector("#reset-game").addEventListener("click", function () {
  init();
});
