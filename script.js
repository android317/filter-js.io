const filterBox = document.querySelectorAll('.box');
const navBox = document.querySelectorAll('.nav ul li');

const filterGoods = filterclass => {

    navBox.forEach(item => item.classList.remove('active'));
    const active = document.querySelector(`[data-f="${filterclass}"]`);
    if (active) active.classList.add('active');
    if (!active) active.classList.remove('active');

    filterBox.forEach(item => {
        item.classList.remove('hide');
        if (!item.classList.contains(filterclass) && filterclass !== 'all') {
            item.classList.add('hide');
        }
    })
}

document.querySelector('nav').addEventListener('click', event => {
    this.onclick = () => {
        if (event.target.tagName !== 'Li') {
            event.style.display = "block";
        }
    }
    if (event.target.tagName == 'Li') return;
    let filterclass = event.target.dataset['f'];
    filterGoods(filterclass);
    window.location.hash = event.target.dataset['f'];
});

if(window.location.hash){
    console.log(window.location.hash);
    filterGoods(window.location.hash.slice(2));
}