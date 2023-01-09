function toggle() {
    var x = document.getElementsByClassName('list')[0];
    if (x.style.display === 'none') {
        x.style.display = 'flex';
    } else {
        x.style.display = 'none';
    }
}