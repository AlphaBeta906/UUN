import figlet from 'figlet'
import Colossal from 'figlet/importable-fonts/Colossal'

figlet.parseFont('Standard', Colossal);


figlet.text('UUN', {
    font: 'Standard',
}, function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

    console.log(`%c${data.split("\n").splice(0, (data.split("\n").length - 3)).join("\n")}`, ['font-weight: 900', 'font-family: monospace', 'color: #5b92e5'].join(';'));
    console.log(`Welcome, %c-ACheesyNameHere-`, ['color: black', 'background: black', 'border: 1px solid black'].join(';'));
});