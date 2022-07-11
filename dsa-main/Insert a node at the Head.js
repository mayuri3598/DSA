function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");
    const len = +input[0]
    // console.log(len)

    for (let i = 1; i <= len; i++) {
        let n = input[i]
        let res = ""
        for (let j = n; j > 0; j--) {
            res += j+ " "
        }
        console.log(res.trim())
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    1
    2
    3`);
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