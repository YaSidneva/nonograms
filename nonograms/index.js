//create container
let container = document.createElement('div');
container.classList.add('container');
document.querySelector('body').appendChild(container);

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

//render table
let renderTable = function () {
    let table = document.createElement('div');
    table.classList.add('table');
    main.appendChild(table);

    let elementEmpty = document.createElement('div');
    table.appendChild(elementEmpty);
    elementEmpty.innerText = ' ';
    let arrTopTip = ['', 2, '', 2, '', 3, 2, 4, 2, 3];
    let topTipEl = document.createElement('div');
    topTipEl.classList.add('top-tip');
    table.appendChild(topTipEl);
    renderTip(topTipEl, arrTopTip);

    let leftTipEl = document.createElement('div');
    leftTipEl.classList.add('left-tip');
    table.appendChild(leftTipEl);
    let arrLeftTip = [' ', ' ', 1, ' ', '', '', '', 1, '', 1, 3, 5, 1, 5, 1];
    renderTip(leftTipEl, arrLeftTip);

    function renderTip(elemTip, arrTip) {
        for (let i = 0; i <= arrTip.length - 1; i++) {
            let element = document.createElement('div');
            element.classList.add('tip-elem');
            elemTip.appendChild(element);
            element.innerText = arrTip[i];
        }
    }
}
renderTable();
