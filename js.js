const tag = (keyword) => {
    let tag = document.createElement('span');
    let x = document.createElement('i');
    tag.className = 'badge badge-pill badge-dark ';
    tag.style.fontSize = '1.5rem'
    tag.innerText = keyword;
    x.className = 'bi bi-x';
    tag.appendChild(x);
    return tag;
}

window.onload = () => document.querySelector('.album > .container').prepend(tag('Test'));