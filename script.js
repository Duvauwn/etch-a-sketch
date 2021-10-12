const container = document.querySelector('#container');

const btn = document.querySelector('#btn');
const clear = document.querySelector('#clear');

let answer;
answer = 16;

function rand() {
    let random = Math.floor(Math.random() * 256);
    return random;
}

function newDiv() {
    for (let i = 0; i < (answer * answer); i++) {
        if (answer > 100) {
            return;
        }
        const content = document.createElement('div');
        content.classList.add('content');
        content.setAttribute('id', i);
        content.style.border = '1px solid black';
        content.style.width = (100 / answer) + 'vw';
        content.style.height = (100 / answer) + 'vh';
        container.appendChild(content);

        content.addEventListener('mouseover', () => {
            content.classList.add('hovering');
            document.getElementById(i).style.backgroundColor = 'rgb(' + rand() + ', ' + rand() + ', ' + rand() + ')';
            console.log(rand());

        });
        clear.addEventListener('click', () => {
            container.removeChild(content);
        })

    }
}

newDiv()
function user() {
    answer = prompt('How many now bud?')
    return answer;
}
clear.addEventListener('click', user,)

clear.addEventListener('click', newDiv)
