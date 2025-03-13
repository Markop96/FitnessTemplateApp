document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
        direction: 'top'
    });
});

window.onscroll = function () {
    var scrollButton = document.querySelector('.button12');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "flex";
    } else {
        scrollButton.style.display = "none";
    }
};

document.getElementById("scrollToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
