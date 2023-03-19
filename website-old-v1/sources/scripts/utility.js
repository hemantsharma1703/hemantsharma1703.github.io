function toggleMenu() {
    let navbar = document.getElementById('menu');
    let menubutton = document.getElementById('menubtn');
    let closebutton = document.getElementById('closebtn')
    if(window.innerWidth <= 900) {
        if(navbar.style.display != 'block') {
            navbar.style.display = 'block';
            menubutton.style.display = 'none';
            closebutton.style.display = 'block';
        }
        else {
            navbar.style.display = 'none'; 
            menubutton.style.display = 'block';
            closebutton.style.display = 'none';
        }
    }
}