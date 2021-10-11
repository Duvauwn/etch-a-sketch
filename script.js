const container = document.querySelector('#container');

const btn = document.querySelector('#btn');
const clear = document.querySelector('#clear');

let answer;
answer = 6.25;
for (let i = 0; i <= 255; i++) {
    const content = document.createElement('div');
    content.classList.add('content');
    content.style.border = '1px solid black';
    content.style.width = answer + 'vw';
    content.style.height = answer + 'vh';
    container.appendChild(content);

    content.addEventListener('mouseover', () => {
        content.classList.add('hovering');
    });
    clear.addEventListener('click', () => {
        container.removeChild(content);
    })
}
//You need to start merging the stuff below to the stuff above. That'll fix all your problems with removing divs each click.
function newDiv() {
    for (let j = 0; j < (answer * answer); j++) {
        if (answer > 100) {
            return;
        }
        const newContent = document.createElement('div');
        newContent.classList.add('content');
        newContent.style.border = '1px solid black';
        newContent.style.width = (100 / answer) + 'vw';
        newContent.style.height = (100 / answer) + 'vh';
        container.appendChild(newContent);

        newContent.addEventListener('mouseover', () => {
            newContent.classList.add('hovering');
        });
    }
}

function user() {
    answer = prompt('How many now bud?')
    return answer;
}
clear.addEventListener('click', user,)

clear.addEventListener('click', newDiv)