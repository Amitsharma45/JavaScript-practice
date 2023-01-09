var t=1;
function toggle() {
    var x = document.getElementsByClassName('list')[0];
    if (t) {
        x.classList.add('a');
        x.classList.remove('b');
        t=0;
    } else {
        t=1;
        x.classList.add('b');
        x.classList.remove('a');
    }
}