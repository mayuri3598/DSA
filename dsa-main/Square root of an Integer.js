function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")

    for (let i = 1; i < input.length; i++) {
        let no = +input[i].trim()
        console.log(Math.floor(no ** (1 / 2)))
    }

}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    4
    8
    9
    10
    16
    17
    21`);
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