// HEADER MENU

let headerHeight = document.querySelector('.header-singolo').offsetHeight;

function selectorRemover(selector) {
    document.querySelector(selector).classList.remove(selector);
}

let headerMenuUnits = document.querySelectorAll('.header-nav-li');

for (let unit of headerMenuUnits) {
    unit.onclick = headerSelector;
}

function headerSelector() {
    window.onscroll = '';
    setTimeout(function () {
        window.onscroll = menuUnitSelector;
    }, 1000)
    if (!event.target.className.includes('header-nav-li-selected')) {
        document.querySelector('.header-nav-li-selected').classList.remove('header-nav-li-selected');
        event.target.classList.add('header-nav-li-selected');
    }
    document.querySelector('html').scrollTo(0, document.getElementById(event.target.innerHTML).offsetTop - headerHeight + 10);
}

window.onscroll = menuUnitSelector;

function menuUnitSelector() {
    if (document.documentElement.getBoundingClientRect().top < -document.getElementById('HOME').offsetTop + headerHeight) {
        document.querySelector('.header-nav-li-selected').classList.remove('header-nav-li-selected');
        document.querySelector('.header-nav-home').classList.add('header-nav-li-selected');
    }
    if (document.documentElement.getBoundingClientRect().top < -document.getElementById('SERVICES').offsetTop + headerHeight) {
        document.querySelector('.header-nav-li-selected').classList.remove('header-nav-li-selected');
        document.querySelector('.header-nav-services').classList.add('header-nav-li-selected');
    }
    if (document.documentElement.getBoundingClientRect().top < -document.getElementById('PORTFOLIO').offsetTop + headerHeight) {
        document.querySelector('.header-nav-li-selected').classList.remove('header-nav-li-selected');
        document.querySelector('.header-nav-portfolio').classList.add('header-nav-li-selected');
    }
    if (document.documentElement.getBoundingClientRect().top < -document.getElementById('ABOUT').offsetTop + headerHeight) {
        document.querySelector('.header-nav-li-selected').classList.remove('header-nav-li-selected');
        document.querySelector('.header-nav-about').classList.add('header-nav-li-selected');
    }
    if (document.documentElement.getBoundingClientRect().top < -document.getElementById('CONTACT').offsetTop + headerHeight) {
        document.querySelector('.header-nav-li-selected').classList.remove('header-nav-li-selected');
        document.querySelector('.header-nav-contact').classList.add('header-nav-li-selected');
    }
}

// PORTFOLIO TAGS

const tags = document.querySelectorAll(".potfolio__topics_item");
const portfolio = document.querySelector(".portfolio__items");

tags.forEach(tag => tag.addEventListener("click", (event) => {
    if( !event.target.classList.contains("portfolio__topics_item_selected") ) {
        let portfolioPictures = [...portfolio.querySelectorAll(".portfolio__item")];
        portfolioPictures.unshift(portfolioPictures.pop());
        portfolioPictures.forEach( pic => portfolio.append(pic) );
    }
    tags.forEach(t => t.classList.remove('portfolio__topics_item_selected'));
    event.target.classList.add("portfolio__topics_item_selected");
}));

// PORTFOLIO CARDS

let portfolioCards = document.querySelectorAll('.portfolio__item');
let cardList = [];

for (let card of portfolioCards) {
    card.onclick = portfolioCardSelector;
    cardList.push(card.classList[1]);
}

function portfolioCardSelector() {
    if (!document.querySelector('.portfolio__item_selected')) {
        event.target.classList.add('portfolio__item_selected');
    }
    if (!event.target.className.includes('portfolio__item_selected')) {
        document.querySelector('.portfolio__item_selected').classList.remove('portfolio__item_selected')
        event.target.classList.add('portfolio__item_selected')
    }
}

// FORM

let submitForm = document.querySelector('.quote__container_form')
submitForm.onsubmit = showSent;

function showSent() {
    let message = document.createElement('p');

    message.textContent = `Сообщение отправлено \n`

    if (!document.getElementById('quote__subject').value) {
        message.textContent += `Без темы \n`;
    } else {
        message.textContent += 'Тема: ' + document.getElementById('quote__subject').value + '\n'
    }

    if (!document.getElementById('quote__describe').value) {
        message.textContent += `Без описания \n`;
    } else {
        message.textContent += 'Описание: ' + document.getElementById('quote__describe').value + '\n'
    }
    alert(message.textContent);
    document.getElementById('quote__name').value = '';
    document.getElementById('quote__email').value = '';
    document.getElementById('quote__subject').value = '';
    document.getElementById('quote__describe').value = '';
    event.preventDefault();
}

// SCREEN SWITCHER

const phone1Element = document.querySelector(".slider-phone-vert"),
    phone2Element = document.querySelector(".slider-phone-hori"),
    phone1black = document.querySelector(".slider-phone-hori-black1"),
    phone2black = document.querySelector(".slider-phone-hori-black2");

phone1Element.addEventListener("click", event => {
    let phoneSelectedElement = document.querySelector('.slider-phone-hori-black1');

    if (phoneSelectedElement.style.display !== 'block') {
        phoneSelectedElement.style.display = 'block';
    } else {
        phoneSelectedElement.style.display = 'none';
    }
});

phone1black.addEventListener("click", event => {
    let phoneSelectedElement = document.querySelector('.slider-phone-hori-black1');

    if (phoneSelectedElement.style.display !== 'block') {
        phoneSelectedElement.style.display = 'block';
    } else {
        phoneSelectedElement.style.display = 'none';
    }
});

phone2Element.addEventListener("click", event => {
    let phoneSelectedElement = document.querySelector('.slider-phone-hori-black2');

    if (phoneSelectedElement.style.display !== 'block') {
        phoneSelectedElement.style.display = 'block';
    } else {
        phoneSelectedElement.style.display = 'none';
    }
});

phone2black.addEventListener("click", event => {
    let phoneSelectedElement = document.querySelector('.slider-phone-hori-black2');

    if (phoneSelectedElement.style.display !== 'block') {
        phoneSelectedElement.style.display = 'block';
    } else {
        phoneSelectedElement.style.display = 'none';
    }
});
