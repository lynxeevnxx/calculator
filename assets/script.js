const btn = document.querySelectorAll('.button');

btn.forEach(b => {
    b.addEventListener('click', () => {
        alert('a')
    })
})