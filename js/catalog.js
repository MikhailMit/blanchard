document.addEventListener("DOMContentLoaded", function() {
    function tabsActive(tabPath, tabTarget) {
        document.querySelectorAll(tabPath).forEach(item => {
            item.addEventListener("click", function(e) {
                let path = e.currentTarget.dataset.path;
                document.querySelectorAll(tabTarget).forEach(el => {
                    el.classList.remove("gallery-active");
                })
                document.querySelectorAll(tabPath).forEach(el => {
                    el.classList.remove("gallery-active");
                })
                document.querySelector(`[data-target="${path}"]`).classList.add("gallery-active");

                this.classList.add("gallery-active");
            })
        })
    };
    tabsActive(".catalog__flag", ".catalog__card-tab");
    tabsActive(".accordion__tab-btn", ".catalog__card-left-tab")
})
