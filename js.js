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
    let isAlert = document.querySelector('.container > .alert-warning');
    if (isAlert) {isAlert.remove()};

    tags = [...document.querySelectorAll('.badge-pill')].map(item => item.innerText);
    Object.values(nameList).forEach(card => card.parentElement.classList.remove('d-none'));
    for(keyword of tags) {
        let regex = new RegExp(keyword, 'i');
        for(name in nameList) {
            if (!regex.test(name)) {
                nameList[name].parentElement.classList.add('d-none');
            }
        }
    }
    
    if (!document.querySelector('.col-md-4:not(.d-none)')) {
        let p = document.createElement('p');
        p.className = 'alert alert-warning';
        p.id = 'msg';
        p.innerText = 'Pagal paieškos kriterijus elementų nerasta!';
        document.querySelector('.album > .container').appendChild(p);
        console.log(p);
    }
}

window.onload = init;