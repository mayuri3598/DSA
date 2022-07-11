function runProgram(input) {
    // Write code here
    var newInput = input.trim().split('\n')
    var [len, k] = newInput[0].trim().split(" ").map(Number)
    var test = newInput[1].trim().split(" ").map(Number)
    //console.log(len, k, test)
    var res = 0

    for (let i = 0; i < len; i++) {
        if (test[i] >= test[k-1] && test[i] != 0) {
            res++
        }
    }
    console.log(res)

}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`8 5
    10 9 8 7 7 7 5 5`);
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