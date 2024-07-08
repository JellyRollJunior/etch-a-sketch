const gridContainer = document.querySelector("#grid-container");

/* Functions */
// Create default 16 x 16 grid
function createGrid(gridSize) {
    if (gridSize === null) {
        return;
    }
    if (gridSize === undefined) {
        gridSize = 16;
    }
    for (let i = 0; i < gridSize; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        gridContainer.appendChild(gridColumn);

        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.classList.add("grid-square");
            gridColumn.appendChild(square);
        }
    }
}

function removeGrid() {
    const gridColumns = document.querySelectorAll(".grid-column");
    gridColumns.forEach((column) => {
        column.remove();
    });
}

// prompt user for gridSize
function getGridSize() {
    let gridSize = prompt("Please enter a grid size [1 - 100]");
    if (gridSize === "" || isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert("Please enter a valid grid size");
        return null;
    }
    return gridSize;
}

/* Event listeners */
// Change color of grid-square on mouseover
gridContainer.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.classList.contains("grid-square")) {
        target.classList.add("hovered");
    }
});

const resizeBtn = document.querySelector("#resize");
resizeBtn.addEventListener("click", () => {
    let gridSize = getGridSize();
    if (gridSize !== null) {
        removeGrid();
        createGrid(gridSize);
    }
});

// execution phase
createGrid();