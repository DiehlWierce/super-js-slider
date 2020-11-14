let block = document.querySelector("#rec250139832");
let item = block.querySelectorAll(".t786__col_mobile-grid");
let sep = block.querySelectorAll(".t786__separator");

sep.forEach(el => {
    el.parentNode.removeChild(el);
})

item.forEach(item => {
    item.classList.add('test');
    let item2 = item.cloneNode(true);
    block.appendChild(item2);
})
