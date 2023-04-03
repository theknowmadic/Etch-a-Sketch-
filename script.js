const container = document.querySelector('.container');
const button = document.querySelector('.popup');


// Function that uses a for-loop to create a 16x16 grid
function makeRows(userSize) {
    container.style.setProperty('--grid-rows', userSize);
    container.style.setProperty('--grid-cols', userSize);
    for (c = 0; c < (userSize * userSize); c++) {
        const cell = document.createElement("div");
        cell.addEventListener('mouseover', () => { 
            cell.style.backgroundColor = 'black'
        })
        container.appendChild(cell).className = "grid-item";
    };
};

button.addEventListener('click', () => {
    let userSize = Number(prompt("Choose the amount of boxes you want", "1-100"))

    while (userSize > 100) {
        userSize = Number(prompt("Pick a smaller number less than 100", "1-100"))
    }

    makeRows(userSize)
})

makeRows()