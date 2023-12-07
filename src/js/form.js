import axios from "axios";

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('[data-form]')
    const alert = document.querySelector('.alert');
    const close = alert.querySelector('.alert__close')
    let timeout = null;

    const getData = (els) => {
        const data = new FormData();
        for (let i = 0; i < els.length; i++) {
            data.append(els[i].name, els[i].value);
        }
        return data;
    }

    const sendData = (url, els) => {
        axios.post(url, getData(els))
            .then(response => {
                alert.classList.add('active')
                timeout = null;
                timeout = setTimeout(() => {
                    alert.classList.remove('active')
                }, 3000)
            })
    }

    forms.forEach(form => {
        const items = form.querySelectorAll('.form__item')
        const els = [...form.querySelectorAll('input'), ...form.querySelectorAll('textarea')];
        const url = form.getAttribute('action')
        const button = form.querySelector('.button')

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            sendData(url, els)
        })
        button.addEventListener('click', () => {
            items.forEach(el => {
                const input = el.querySelector('input')
                const error = el.querySelector('.form__text.form__text--error')
                if (input.value === '') {
                    input.classList.add('invalid')
                    error.classList.add('active')
                }
                if (!input.validity.valid) {
                    input.classList.add('invalid')
                    error.classList.add('active')
                }
            })
        })
        items.forEach(el => {
            const input = el.querySelector('input')
            const error = el.querySelector('.form__text.form__text--error')
            input.addEventListener('change', () => {
                if (!input.validity.valid) {
                    input.classList.add('invalid')
                    error.classList.add('active')
                } else {
                    input.classList.remove('invalid')
                    error.classList.remove('active')
                }
            })
        })
    })
    close.addEventListener('click', () => {
        alert.classList.remove('active')
        clearTimeout(timeout)
        timeout = null;
    })
})
