// all accordion class decscription

let acc = document.querySelectorAll('.accordion');

acc.forEach(function(item) {
    let panel = item.nextElementSibling;
    console.log(panel)
    item.addEventListener('click', function() {

        this.classList.toggle("active");

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.border = '2px solid transparent';

        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
            panel.style.border = '2px solid #ddd';
            panel.style.marginBottom = '10px';
        }
    })
})