function calculator() {
    var first = parseInt(prompt('First Number: '));
    var second = parseInt(prompt('Second Number: '));
    var operator = (prompt('Choose your operator: ' + " +,  -,  *,  /"))

    if (operator === '+') {
        alert(first + second);
    } else if (operator === '-') {
        alert('The answer is: ' + first - second);
    } else if (operator === '/') {
        alert('The answer is: ' + first / second);
    } else if (operator === '*') {
        alert('The answer is: ' + first * second);
    }else{
        alert('this is invalid!')
    }
}

calculator();