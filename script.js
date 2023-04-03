const button = document.querySelector('.popup');
const container = document.querySelector('.container')



// Function that uses two for-loops to create a grid
const makeRows = (grid) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')

    for (let i = 0; i < grid; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')

    for (let j = 0; j < grid; j++) {
        const widthAndHeight = 960 / grid
        const gridBox = document.createElement('div')
        gridBox.classList.add('grid-box')
        gridBox.style.width = `${widthAndHeight}px`
        gridBox.style.height = `${widthAndHeight}px`
        // Event listener
        gridBox.addEventListener('mouseover', () => { 
            gridBox.style.backgroundColor = 'black'
        })
        row.appendChild(gridBox)
         }
         wrapper.appendChild(row)
    }
    container.appendChild(wrapper)
}

makeRows()


button.addEventListener('click', () => {
    let userSize = Number(prompt("Choose the amount of boxes you want", "1-100"))

    while (userSize > 100) {
        userSize = Number(prompt("Ops! Pick a smaller number less than 100", "1-100"))
    }

    const wrapper = document.querySelector('.wrapper')
    wrapper.remove()
    makeRows(userSize)
})


