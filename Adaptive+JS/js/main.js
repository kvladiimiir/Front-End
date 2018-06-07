window.onload = onWindowLoaded;

function onWindowLoaded() {
    tryToListen('my_vk', 'click', openWindow);
    tryToListen('cross', 'click', closeWindow);
    tryToListen('overlay', 'click', closeWindow);
    tryToListen('submit', 'click', requiredField);
    tryToListen('fname', 'focus', changeFocus);
    tryToListen('mail', 'focus', changeFocus);
    tryToListen('button_movies', 'click', showMovies);
}

function getById(id) {
    return document.getElementById(id);
}

function getByClass(className) {
    return document.getElementsByClassName(className);
}

function tryToListen(id, eventName, func) {
    var element = getById(id);
    if (element) {
        element.addEventListener(eventName, func);
    }
}

function openWindow() {
    getById('add_window').style.display = 'block';
    getById('overlay').style.display = 'block';
}

function closeWindow() {
    getById('add_window').style.display = 'none';
    getById('overlay').style.display = 'none';
}

function opacityBlock() {
    for (var i = 0; i < getByClass('add_films').length; i++) {
        getByClass('add_films')[i].style.opacity = 1;
    }
}

function showMovies() {
    this.style.display = 'none';
    for (var i = 0; i < getByClass('add_films').length; i++) {
        getByClass('add_films')[i].style.display = 'block';
    }
    setTimeout(opacityBlock, 0);
}

function changeFocus() {
    this.style.borderColor = null;
}

function requiredField(event) {
    var name = getById('fname');
    var email = getById('mail');
    var form_fill = true;
    var blank = '';
    if(name.value === blank) {
        form_fill = false;
        name.style.borderColor = '#ee0707';
    }
    if(email.value === blank) {
        form_fill = false;
        email.style.borderColor = '#ee0707';
    }
    if (form_fill == false){
        event.preventDefault();
    }
}