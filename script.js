const container = document.querySelector('.container')



// Function that uses a for-loop to create a 16x16 grid
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        const cell = document.createElement("div");
        cell.addEventListener('mouseover', () => { 
            cell.style.backgroundColor = 'black'
        })
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);
