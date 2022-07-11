function runProgram(input) {
    // Write code here
    var input = +input.trim()
    // console.log(input)

    for (let i = 1; i <= input; i++) {
        var res = ""
        for (let j = 0; j < i; j++) {
            res += '*'
        }
        console.log(res)
    }




}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5`);
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