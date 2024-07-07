const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 16; i++) {
    const gridColumn = document.createElement("div");
    gridContainer.appendChild(gridColumn);

    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        gridColumn.appendChild(square);
    }
}
