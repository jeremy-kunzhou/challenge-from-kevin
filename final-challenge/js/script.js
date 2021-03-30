document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.toggle-button').addEventListener('click', (event) => {
        event.target.classList.toggle('fa-times')
    })
})