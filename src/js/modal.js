document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('[data-modal]');
    const modalClose = document.querySelector('.modal__close')
    const modalContent = document.querySelector('.modal__content')
    const openModal = document.querySelectorAll('[data-modal-open]');

    openModal.forEach(el => {
        el.addEventListener('click', () => {
            modal.classList.add('active')
        })
    })

    modalClose.addEventListener('click', () => {
        modal.classList.remove('active')
    })

    modal.addEventListener('click', () => modal.classList.remove('active'))
    modalContent.addEventListener('click', (evt) => evt.stopPropagation())
})
