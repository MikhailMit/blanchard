var kinito = document.querySelector('#tel560');
var kinito2 = document.querySelector('#tel');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(kinito);
im.mask(kinito2);
let selector = document.querySelector('input[type="tel"]');
selector.addEventListener('input', function() {
    const re = /^\d*(\.\d+)?$/
});
let validateForms = function(selector, successModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: {
            name: {
                required: true,
                minLength: 2,
                maxLength: 30,
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = kinito.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
            }
        },
        messages: {
            name: 'Как вас зовут?',
            tel: 'Укажите ваш телефон',
        },
        colorWrong: '#D11616',
        submitHandler: function(form) {
            let formData = new FormData(form);
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Отправлено');
                        document.addEventListener('hide.toast', (e) => {
                            console.log(e.detail.target);
                        });
                        new Toast({
                            title: false,
                            text: 'сообщение отправлено',
                            theme: 'success',
                            autohide: true,
                            interval: 5000
                        });
                    }
                }
            }
            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);
            form.reset();
        }
    });
}
validateForms('#contacts__form560', '.thanks-popup', 'send goal');
let validateForms2 = function(selector, successModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: {
            name: {
                required: true,
            },
            tel: {
                required: true,
                function: (name, value) => {
                    const phone = kinito2.inputmask.unmaskedvalue()
                    return Number(phone) && phone.length === 10
                }
            }
        },
        messages: {
            name: 'Как вас зовут?',
            tel: 'Укажите ваш телефон',
        },
        colorWrong: '#D11616',
        submitHandler: function(form) {
            let formData = new FormData(form);
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log('Отправлено');
                        document.addEventListener('hide.toast', (e) => {
                            console.log(e.detail.target);
                        });
                        new Toast({
                            title: false,
                            text: 'сообщение отправлено',
                            theme: 'success',
                            autohide: true,
                            interval: 5000
                        });
                    }
                }
            }
            xhr.open('POST', 'mail.php', true);
            xhr.send(formData);
            form.reset();
        }
    });
}
validateForms2('#contacts__form1920', '.thanks-popup', 'send goal');
