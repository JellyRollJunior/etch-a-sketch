const gridContainer = document.querySelector("#grid-container");

// Create 16 x 16 grid
for (let i = 0; i < 30; i++) {
    const gridColumn = document.createElement("div");
    gridColumn.classList.add("grid-column");
    gridContainer.appendChild(gridColumn);

    for (let j = 0; j < 30; j++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        gridColumn.appendChild(square);
    }
}

// Change color of grid-square on mouseover
gridContainer.addEventListener("mouseover", (event) => {
    let target = event.target;
    if (target.classList.contains("grid-square")) {
        target.classList.add("hovered");
    }
});