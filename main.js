const title = document.getElementById("title");
title.addEventListener('mouseover', titleOver);
title.addEventListener('mouseout', titleOut);

function titleOver(event) {
    title.classList.add('blue');
}

function titleOut(event) {
    title.classList.remove('blue');
}