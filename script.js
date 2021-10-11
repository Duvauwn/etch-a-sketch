const container = document.querySelector('#container');

for (let i = 0; i <= 255; i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    content.style.border = '1px solid black';
    container.appendChild(content);

    content.addEventListener('mouseover', () => {
        content.classList.add('hovering');
    });

}

