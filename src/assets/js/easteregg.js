import figlet from 'figlet'
import O8 from 'figlet/importable-fonts/O8'

figlet.parseFont('Standard', O8);


figlet.text('UUN', {
    font: 'Standard',
}, function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

    console.log(`%c${data}`, ['font-weight: 900', 'font-family: monospace', 'color: #5b92e5'].join(';'));
    console.log(`Welcome, %c-ACheesyNameHere-`, ['color: black', 'background: black', 'border: 1px solid black'].join(';'));
});

console.warn = function () { }
console.error = function () { }
console.info = function () { }