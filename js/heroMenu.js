document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".hero__item-btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".hero__dropdown");
            let menuArrow = this.parentElement.querySelector(".hero__arrow")

            document.querySelectorAll(".hero__item-btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("active--btn");
                }
            });
            document.querySelectorAll(".hero__arrow").forEach(el => {
                if (el != menuArrow) {
                    el.classList.remove("active");
                }
            })
            document.querySelectorAll(".hero__dropdown").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("active-list--item");
                }
            })

            dropdown.classList.toggle("active-list--item");
            btn.classList.toggle("active--btn")
            menuArrow.classList.toggle("active")
        })
    })


    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".list")) {
            document.querySelectorAll(".hero__dropdown").forEach(el => {
                el.classList.remove("active-list--item");
            })
            document.querySelectorAll(".hero__item-btn").forEach(el => {
                el.classList.remove("active--btn");
            })
            document.querySelectorAll(".hero__arrow").forEach(el => {
                el.classList.remove("active");
            });
        }
    })
})
