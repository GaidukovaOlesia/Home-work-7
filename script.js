
let answerOperation;
do {
    answerOperation = prompt(`Choose operation +, -, * or /`);
    if (!answerOperation) {
        alert("Please, choose operation!")
    }
} while (!(answerOperation === "+" || answerOperation === "-" || answerOperation === "*" || answerOperation === "/"));


let useOperand;
do {
    useOperand = parseInt(prompt("How many operand do you want use? It`s must be number more than 1 and less than 7!"));
    if(!useOperand) {
        alert("Please enter operand")
    }
} while (isNaN(useOperand) || (useOperand === null) || (useOperand < "1") || (useOperand > "7"))


let Number;
let answer;
for (let i = 1; i <=useOperand; i++) {
    Number = parseInt(prompt(`Enter the number`));
    if (i === 1) {
        answer = Number;
        continue;
    }
    switch (answerOperation) {
        case "+":
            answer += Number;
            break;
        case "-":
            answer -= Number;
            break;
        case "*":
            answer *= Number;
            break;
        case "/":
            answer /= Number;
            break;
    }
}
alert(`Final result is ${answer}`);


