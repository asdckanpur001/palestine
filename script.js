const items = ["Apple", "Banana", "Orange", "Grapes", "Strawberry", "Pineapple"];

const searchBar = document.getElementById('searchBar');
const list = document.getElementById('list');
const message = document.getElementById('message');

function renderList(filter = '') {
    list.innerHTML = '';
    if (filter.trim() === '') {
        list.style.display = 'none';
        message.textContent = '';
        return;
    }
    const filteredItems = items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
    filteredItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        listItem.classList.add('list-item');
        listItem.addEventListener('click', () => showMessage(item));
        list.appendChild(listItem);
    });
    list.style.display = filteredItems.length ? 'block' : 'none';

    // If no items match and the filter is a complete word, show a different message
    if (filteredItems.length === 0 && items.every(item => item.toLowerCase() !== filter.toLowerCase())) {
        message.textContent = `${filter} - you can use it.`;
    } else {
        message.textContent = '';
    }
}

function showMessage(item) {
    if (items.includes(item)) {
        message.textContent = `${item} Support Israil.`;
        message.classList.add('israeli');
    } else {
        message.textContent = `${item} -no record found you can use it.`;
        message.classList.add('not-israeli');
    }
}

searchBar.addEventListener('input', (e) => {
    renderList(e.target.value);
});

searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        showMessage(searchBar.value);
    }
});

// Initial render (hide the list initially)
renderList();
