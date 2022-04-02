const btnSearch = document.querySelector('.header__btn-search');
const btnClose = document.querySelector('.search-form__close');
const searchForm = document.querySelector('.search-form');
const searchPlaceHolder = document.querySelector('.header__btns-serch');
const btnCloseBody = document.querySelector('body');

btnClose.addEventListener('click', () => {
    searchForm.classList.remove('search-form--visible');
    searchPlaceHolder.classList.remove('header__serch-active');
    setTimeout(() => {
        searchForm.classList.remove('search-form--display');

    });
});

btnSearch.addEventListener("click", function() {
    searchForm.classList.add("search-form--visible");
    searchPlaceHolder.classList.add('header__serch-active');
    this.classList.add("search-form--display");
})

document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header__search-form-gl")) {
        searchForm.classList.remove("search-form--visible");
        searchPlaceHolder.classList.remove('header__serch-active');
        searchForm.querySelector("input").value = "";

    }

})
