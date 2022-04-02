const defaultSelect = () => {
    const element = document.querySelector('.selecktCustom');
    const choices = new Choices(element, {
        searchEnabled: false,
        position: 'bottom',

    });

    let ariaLabel = element.getAttribute('aria-label');
    element.closest('.choices').setAttribute('aria-label', ariaLabel);
};

defaultSelect();



const mediaQuerySelect = window.matchMedia('(max-width: 560px)')

function handleTabletChange(e) {
    if (e.matches) {

        const multiDefault = () => {
            const elements = document.querySelectorAll('.selecktCustom__mobile');
            elements.forEach(el => {
                const choices = new Choices(el, {
                    searchEnabled: false,
                    position: 'bottom',

                });
                let ariaLabel = element.getAttribute('aria-label');
                element.closest('.choices').setAttribute('aria-label', ariaLabel);
            });

        }

        multiDefault();
    }
}

mediaQuerySelect.addListener(handleTabletChange)
handleTabletChange(mediaQuerySelect)
