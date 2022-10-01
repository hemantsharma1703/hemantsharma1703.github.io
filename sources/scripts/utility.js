function toggleMenu() {
    let navbar = document.getElementById('menu');
    if(window.innerWidth <= 900) {
        if(navbar.style.display != 'block')
            navbar.style.display = 'block';
        else
            navbar.style.display = 'none';
    }
}