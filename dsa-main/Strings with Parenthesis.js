function runProgram(input) {
    // Write code here
    var newinput = input.trim();

    var str = ""
    for (let i = 0; i < newinput.length; i++) {
        if (newinput[i] == "(") {
            str += newinput[i]
        }
        if (newinput[i] == "[") {
            str += newinput[i]
        }
        if (newinput[i] == "{") {
            str += newinput[i]
        }
        if (newinput[i] == ")") {
            str += newinput[i]
        }
        if (newinput[i] == "]") {
            str += newinput[i]
        }
        if (newinput[i] == "}") {
            str += newinput[i]
        }
    }
   // console.log(str.length)
    isBalanced(str)


    function isBalanced(test) {
        const stack = [];
        var brackets = {
            '(': ')',
            '[': ']',
            '{': '}'
        };
        for (var i = 0; i < test.length; i++) {
            if (stack.length > 0 && brackets[stack[stack.length - 1]] === test[i]) {
                stack.pop();
            } else {
                stack.push(test[i]);
            }
        }

        if (stack.length === 0) {
            console.log("balanced");
        } else {
            console.log("unbalanced");
        }
    }




}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`(((((((((())))))))))`);
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