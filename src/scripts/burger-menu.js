const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

function toggleMobileMenu() {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')

    var navbarHeight = document.getElementById('navbar').offsetHeight;
    var x = 1 * navbarHeight;
    document.getElementById('menu').style.top = x + 'px';
}

btn.addEventListener('click', () => {
    toggleMobileMenu();
})

function scrollToSection(section) {
    $('html').animate({
        scrollTop: $(section).offset().top - 1.9 * ($("#navbar").height())
    }, 100);

    if (!$('#menu').hasClass('hidden')) {
        toggleMobileMenu();
    }
};