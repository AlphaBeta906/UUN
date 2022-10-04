import figlet from 'figlet'
import standard from 'figlet/importable-fonts/Standard.js'

figlet.parseFont('Standard', standard);

class devtools {
    constructor() { }
    static async toString() {
        if (!this.opened) {
            console.clear()
            
            figlet.text('UUN', {
                font: 'Standard',
            }, function (err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                
                console.log(`%c${data}`, ['font-weight: 900', 'font-family: monospace','color: #5b92e5'].join(';'));
                console.log(`Welcome, %c-ACheesyNameHere-`, ['color: black', 'background: black', 'border: 1px solid black'].join(';'));
            });
        }
        this.opened = true;
    }
}

console.log("%c", devtools)

console.warn = function () { }
console.error = function () { }
console.info = function () { }