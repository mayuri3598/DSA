function runProgram(input) {
    // Write code here
    var num = +input.trim();
    let temp = num
    let res = ""

    while (num > 0) {
        let rem = num % 10
        res = res + rem
        num = (num - rem) / 10
    }
    if (+res == temp) {
        console.log("Yes")
    } else {
        console.log("No")
    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1222`);
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