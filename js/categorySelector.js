const btn = document.querySelector('.publication__notice--btn');
const blocks = document.querySelectorAll('.form-check--btn');
const input = document.querySelector('label');

btn.addEventListener('click', () => {
    if (!btn.classList.contains('form-check--btn-active')) {
        blocks.forEach(el => {
            el.classList.add('form-check--block-active');
        });

        btn.classList.add('form-check--btn-active');
    } else {
        blocks.forEach(el => {
            el.classList.remove('form-check--block-active');
            if (el.querySelector('.publication__checkbox').checked) {
                el.classList.add('form-check--block-active');
            }
        });

        btn.classList.remove('form-check--btn-active');
    }

});
document.querySelectorAll(".form-check--btn").forEach(el => {
    el.addEventListener("click", function() {
        let label = this;
        if (!btn.classList.contains("form-check--btn-active")) {
            label.classList.remove("form-check--block-active");
        }
    });
})
