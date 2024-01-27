//create container
let container = document.createElement('div');
container.classList.add('container');
let body = document.querySelector('body');
body.appendChild(container);

//create header, main, footer
let header = document.createElement('div');
header.classList.add('header');
container.appendChild(header);
let main = document.createElement('div');
main.classList.add('main');
container.appendChild(main);
let footer = document.createElement('div');
footer.classList.add('footer');
container.appendChild(footer);

const tasks = [
    {
        name: 'skull',
        arrTopTip: ['', 2, '', 2, '', 3, 2, 4, 2, 3],
        arrLeftTip: [' ', ' ', 1, ' ', '', '', '', 1, '', 1, 3, 5, 1, 5, 1],
        result:
            [
                0, 1, 1, 1, 0,
                1, 1, 1, 1, 1,
                1, 0, 1, 0, 1,
                1, 1, 1, 1, 1,
                0, 1, 0, 1, 0
            ]
    }
]

let currentTask = tasks[0];

//render table
let renderTable = function () {
    let table = document.createElement('div');
    table.classList.add('table');
    main.appendChild(table);
    let elementEmpty = document.createElement('div');
    table.appendChild(elementEmpty);
    elementEmpty.innerText = ' ';
    let arrTopTip = currentTask.arrTopTip;
    let topTipEl = document.createElement('div');
    topTipEl.classList.add('top-tip');
    table.appendChild(topTipEl);
    renderTip(topTipEl, arrTopTip);

    let leftTipEl = document.createElement('div');
    leftTipEl.classList.add('left-tip');
    table.appendChild(leftTipEl);
    let arrLeftTip = currentTask.arrLeftTip;
    renderTip(leftTipEl, arrLeftTip);

    function renderTip(elemTip, arrTip) {
        for (let i = 0; i <= arrTip.length - 1; i++) {
            let element = document.createElement('div');
            element.classList.add('tip-elem');
            elemTip.appendChild(element);
            element.innerText = arrTip[i];
        }
    }

    let playground = document.createElement('div');
    playground.classList.add('playground');
    table.appendChild(playground);

    for (let i = 0; i <= 25; i++) {
        let playgroundEl = document.createElement('div');
        playgroundEl.classList.add('playground-element');
        playground.appendChild(playgroundEl);
        let playgroundElChecked = document.createElement('div');
        playgroundEl.appendChild(playgroundElChecked);

        playgroundEl.addEventListener("click", (event) => {
            playgroundElChecked.classList.remove('playground-element-checked-right')
            if (playgroundElChecked.classList.contains('playground-element-checked')) {
                playgroundElChecked.classList.remove('playground-element-checked');
                currentResult[i] = 0;
            } else {
                playgroundElChecked.classList.add('playground-element-checked');
                currentResult[i] = 1;
            }

            if (currentResult.every((val, index) => val === currentTask.result[index])) {
                dialog.showModal();
            }
        });

        playgroundEl.addEventListener('contextmenu', function (event) {
            currentResult[i] = 0;
            event.preventDefault();
            playgroundElChecked.classList.remove('playground-element-checked')
            if (playgroundElChecked.classList.contains('playground-element-checked-right')) {
                playgroundElChecked.classList.remove('playground-element-checked-right');
            } else {
                playgroundElChecked.classList.add('playground-element-checked-right');
            }
        });
    }
}
renderTable();

//modal window 
let dialog = document.createElement('dialog');
let dialogContent = document.createElement('div');
dialogContent.classList.add('dialog-window');
dialog.appendChild(dialogContent);
let dialogText = document.createElement('div');
dialogText.innerHTML = "You are a winner!";
let dialogButton = document.createElement('button');
dialogButton.classList.add('dialog-button');
dialogButton.innerHTML = "Try new image";
dialogButton.addEventListener('click', () => {
    dialog.close();
});
dialogContent.appendChild(dialogText);
dialogContent.appendChild(dialogButton);
body.appendChild(dialog);

let currentResult = Array(25).fill(0);



