function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        var [len, k] = input[i - 1].trim().split(" ").map(Number)
        var arr = input[i].trim().split(" ").map(Number)
        console.log(arr, k)
        for (let j = 0; j < len; j++) {
            
        }

    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    5 2
    222 2221 12221 2222 12
    5 2
    222 2221 12221 2212 12`);
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