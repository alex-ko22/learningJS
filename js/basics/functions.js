//One

console.log(calcSquare(4));

function calcSquare(digit) {
    return ( digit * digit  );
}

//Two

console.log(isEqual(5,5));

function isEqual(digit1, digit2) {
    if (digit1 == digit2)  return true;
    else return false;
}

//Three

console.log(divide(15,6,3));

function divide (digit1, digit2, digit3) {
    return ((digit1 - digit2) /digit3)
}

//Four

sayGoodbuy("Johny");

function sayGoodbuy(name) {
    alert("До свидания, " + name );
}
