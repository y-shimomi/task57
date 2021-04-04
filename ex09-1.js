const addButton = document.getElementById('add')
const removeBotton = document.getElementById('remove')

let i = 1
addButton.addEventListener('click', (event) => {
    const newItem = document.createElement('li')
    newItem.textContent = `アイテム${i}`

    list.appendChild(newItem)
    i++;
})

removeBotton.addEventListener('click', (event) => {

    if (list.lastElementChild != null) {
        list.removeChild(list.lastElementChild)
    }
    //listにない時消さない
    else {

    }
})