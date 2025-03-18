document.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const color = (event.target.innerText);
        document.body.style.backgroundColor = color
    }
});
