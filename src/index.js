const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let message = '';
    let pos = 0;
    while (pos < expr.length){
        if (expr[pos] == '*') {
            message += ' ';
            pos += 10;
            continue;
        }
        let current_letter = expr.slice(pos, pos + 10);
        let morse_code = '';
        for (let j = 0; j < current_letter.length; j++){
            if ((current_letter[j] == '0') && (j % 2 == 0)) {
                j++;
            } else if ((current_letter[j] == '1') && (current_letter[j + 1] == '1')) {
                morse_code += '-';
                j++;
            } else {
                morse_code += '.';
                j++
            }
        }
        for (let [code, symbol] of Object.entries(MORSE_TABLE)) {
            if (code == morse_code) {
                message += symbol;
                break;
            }
        }
        pos += 10;
    }
    return message;
}

module.exports = {
    decode
}