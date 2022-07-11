function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    str = input[0].trim();
    // console.log(str);
    let value = 0
    for (let i = 0; i < str.length; i++) {
        value += (str.charCodeAt(i) - 96)
    }

    console.log(value)


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`aba`);
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