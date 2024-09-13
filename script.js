liToggle.addEventListener('click', _ => {
    const menuEstaAtivo = uiNavBar.classList.contains('active');
    if (menuEstaAtivo) {
        uiNavBar.classList.remove('active');
        uiNavBar.classList.add('navbar');
        aToggle.innerText = '=';
    } else {
        uiNavBar.classList.remove('navbar');
        uiNavBar.classList.add('active');
        aToggle.innerText = 'x';
    }
});
