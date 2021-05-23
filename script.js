const list = document.createElement('ul');
const info = document.createElement('p');
const hmtl = document.querySelector('html');

info.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque dicta rerum adipisci, ullam nulla aspernatur debitis nostrum odit expedita cupiditate praesentium consequuntur molestiae error nobis quasi dolor voluptatem vero eligendi!'

document.body.appendChild(info);
document.body.appendChild(list);

hmtl.onclick = function() {
    const listItem = document.createElement('li');
    const listContent = prompt('Favorite color?');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(event) {
        event.stopPropagation();
        const listContent = prompt('Change your color');
        this.textContent = listContent;
    };
}