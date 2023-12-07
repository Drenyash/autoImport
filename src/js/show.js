document.addEventListener('DOMContentLoaded', () => {
    const showBtn = document.querySelector('[data-show]')
    const hiddenForm = document.querySelector('[data-hidden]')
    const hiddenBlock = document.querySelector('.hidden-block')

    showBtn.addEventListener('click', () => {
        hiddenForm.classList.remove('mob-hidden')
        hiddenBlock.classList.add('hidden')
    })
})
