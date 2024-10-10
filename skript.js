window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var button = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.classList.add("show"); // Button wird sichtbar
    } else {
        button.classList.remove("show"); // Button wird unsichtbar
    }
}

function topFunction() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
