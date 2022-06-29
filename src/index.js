module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero';
    }
    
    let numStrReversed = reverseString(number.toString());
    let result = '';

    let twoDigitStr = reverseString(numStrReversed.substring(0, 2));

    for (let i = 0; i < numStrReversed.length; i++) {
        switch (i) {
            case 0:
                result = onesName(numStrReversed[i]);
                break;

            case 1:
                if (isSpecialCase(twoDigitStr)) {
                    result = specialCaseName(twoDigitStr);
                } else {
                    result = `${dozensName(numStrReversed[i])} ${result}`.trim();
                }
                break;

            case 2:
                result = `${onesName(numStrReversed[i])} hundred ${result}`.trim();
                break;
        }
    }

    return result.trim();
}

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

const isSpecialCase = (numStr) => {
    return (numStr >= 10 && numStr <= 19);
}

const specialCaseName = (numStr) => {
    switch (numStr) {
        case '10':
            return 'ten';
        case '11':
            return 'eleven';
        case '12':
            return 'twelve';
        case '13':
            return 'thirteen';
        case '14':
            return 'fourteen';
        case '15':
            return 'fifteen';
        case '16':
            return 'sixteen';
        case '17':
            return 'seventeen';
        case '18':
            return 'eighteen';
        case '19':
            return 'nineteen';
        default:
            return '';
    }
}

const onesName = (numStr) => {
    switch (numStr) {
        case '0':
            return '';
        case '1':
            return 'one';
        case '2':
            return 'two';
        case '3':
            return 'three';
        case '4':
            return 'four';
        case '5':
            return 'five';
        case '6':
            return 'six';
        case '7':
            return 'seven';
        case '8':
            return 'eight';
        case '9':
            return 'nine';
        default:
            return '';
    }
}

const dozensName = (dozen) => {
    switch (dozen) {
        case '2':
            return 'twenty';
        case '3':
            return 'thirty';
        case '4':
            return 'forty';
        case '5':
            return 'fifty';
        case '6':
            return 'sixty';
        case '7':
            return 'seventy';
        case '8':
            return 'eighty';
        case '9':
            return 'ninety';
        default:
            return '';
    }
}
