function runProgram(input) {
    // Write code here
    let n = +input
    // console.log(n)

    for (let i = 0; i < n; i++) {
        let print = ''
        for (let j = 0; j <= i; j++) {
            print += "*"
        }
        console.log(print)
    }



}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`10`);
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