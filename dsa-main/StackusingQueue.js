
function runProgram(input) {
    // Write code here
    var newInput = input.trim().split('\n');
    let len = Number(newInput[0])
    var stack = new Stack();
    for (let i = 1; i < newInput.length; i++) {
        //console.log(stack)
        let test = newInput[i].trim().split(" ").map(Number)
        if (test[0] == 0) {
            stack.push(test[1])
        }
        else if (test[0] == 1) {
            stack.top()
        }
        else if (test[0] == 2) {
            stack.pop()
        }
    }
}
class Stack {
    constructor() {
        this.s = []
    }
    push(value) {
        //write your code here.
        this.s.push(value)
        console.log(this.s)
    }
    pop() {
        //write your code here..
        this.s.pop()
        console.log(this.s)
    }
    top() {
        //write your code here..
        console.log(this.s[this.s.length - 1])
    }
    isEmpty() {
        //write your code here..
    }
}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`6
    0 1
    0 2
    0 3
    1 
    2
    1`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}