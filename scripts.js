const form = document.querySelector('form');
const input = form.querySelector('input');
const ul = document.querySelector('ul');
const alert = document.querySelector('.alert');
const alertButton = alert.querySelector('button');

alertButton.onclick = () => {
    alert.classList.add('hide');
}

form.onsubmit = (event) => {
    event.preventDefault();

    const itemName = input.value
    addItem(itemName)
}

ul.onclick = (event) => { 
    const target = event.target;
    if  (target.tagName === "IMG") {
        const li = target.closest("li");
        removeItem(li);
    }   
}


function addItem(itemName) {
    if (!itemName) {
        alert("Item invalido.")
        return
    }

    const li = document.createElement('li');
    const _input = document.createElement('input');
    const label = document.createElement('label');
    const button = document.createElement('button');
    const img = document.createElement('img');

    _input.setAttribute('type', 'checkbox');
    _input.setAttribute("name", itemName);
    label.setAttribute("for", itemName);
    label.textContent = itemName;
    img.setAttribute("src", "./assets/trash.svg");

    button.appendChild(img)

    li.appendChild(_input)
    li.appendChild(label)
    li.appendChild(button)

    ul.appendChild(li)
}

function removeItem(li) {
    li.remove()
    alert.classList.remove('hide');
}