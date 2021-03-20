let nameList = {};
let tags = [];

const tag = (keyword) => {
    let tag = document.createElement('span');
    let x = document.createElement('i');
    tag.className = 'badge badge-pill badge-dark ml-4';
    tag.style.fontSize = '1.2rem'
    tag.innerText = keyword;
    x.className = 'bi bi-x ml-2 pointer';
    x.style.cursor = 'pointer';
    x.addEventListener('click', event =>  {event.target.parentNode.remove(); filter();});
    tag.appendChild(x);
    return tag;
}


const search = (event) => {
    const keyword = event.target.previousElementSibling.value;
    if (keyword === '' || tags.includes(keyword)) {return};
    document.querySelector('.tags').append(tag(keyword));
    filter();
    event.target.previousElementSibling.value = '';
}

const init = () => {
    document.querySelector('.form-inline > button').addEventListener('click', search);
    getNames();
}

const getNames = () => {
    const cards = [...document.querySelectorAll('.card')]
    const names = cards.map(item => item.querySelector('.card-title').innerText)
    names.forEach((key, i) => nameList[key] = cards[i]);
}


const filter = () => {
    tags = [...document.querySelectorAll('.badge-pill')].map(item => item.innerText);
    console.log(nameList);
    Object.values(nameList).forEach(card => card.classList.remove('d-none'));
    for(keyword of tags) {
        let regex = new RegExp(keyword, 'i');
        for(name in nameList) {
            if (!regex.test(name)) {
                nameList[name].classList.add('d-none');
            }
        }
    }
}

window.onload = init;