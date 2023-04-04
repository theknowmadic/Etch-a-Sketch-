const button = document.querySelector('.popup');
const container = document.querySelector('.container')

// Function that creates random RGB value
const createRandomRGB = () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return { r, g, b}
}

// Function that uses two for-loops to create a grid
const makeRows = (grid) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    for (let i = 0; i < grid; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

    for (let j = 0; j < grid; j++) {
        const {r, g, b} = createRandomRGB()
        const widthAndHeight = 960 / grid
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        gridBox.style.width = `${widthAndHeight}px`
        gridBox.style.height = `${widthAndHeight}px`
        // Event listener to change background color
        gridBox.addEventListener('mouseover', () => { 
            const bgColor = "rgb(" + r + "," + g + "," + b + ")"; 
            gridBox.style.background = bgColor
        })
        row.appendChild(gridBox)
         }
         wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

makeRows()

// EventListener Button
button.addEventListener('click', () => {
    let userSize = Number(prompt("Choose the amount of boxes you want and begin drawing!", "1-100"))

    while (userSize > 100) {
        userSize = Number(prompt("Ops! Pick a smaller number less than 100", "1-100"))
    }

    const wrapper = document.querySelector('.wrapper')
    wrapper.remove()
    makeRows(userSize)
})


