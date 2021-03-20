const tag = (keyword) => {
    let tag = document.createElement('span');
    let x = document.createElement('i');
    tag.className = 'badge badge-pill badge-dark ml-4';
    tag.style.fontSize = '1.2rem'
    tag.innerText = keyword;
    x.className = 'bi bi-x ml-2 pointer';
    x.style.cursor = 'pointer';
    x.addEventListener('click', event =>  event.target.parentNode.remove());
    tag.appendChild(x);
    return tag;
}


const search = (event) => {
    const keyword = event.target.previousElementSibling.value;
    document.querySelector('.tags').append(tag(keyword));
}

const init = () => {
    document.querySelector('.form-inline > button').addEventListener('click', search);
}



window.onload = init;