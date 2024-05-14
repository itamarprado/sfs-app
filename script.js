const menu = document.querySelector('.options')
let toggleState = false;

function loadPage(page) {
    menu.style.display = "none";
    toggleState = false;


    let localRender = document.querySelector('#root')
    let req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200){
            localRender.innerHTML = req.response
        }
    }

    req.open('GET', `./pages/${page}.html`)
    req.send()
}

function toggleMenu() {
    if(toggleState === true) {
        menu.style.display = "none";
        toggleState = false;
    } else {
        menu.style.display = "flex";
        toggleState = true;
    }
}