const text = document.getElementById('heading');

const prog = 'Success as a developer comes from consistent practices, discipline, and great habits. 🦾😉';
let idx = 1;

setInterval(writeText, 150);

function writeText() {
    text.innerHTML = prog.slice(0, idx);
    idx++;
    if(idx > prog.length) {
        idx = 1;
    }
}