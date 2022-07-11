function runProgram(input) {
    // Write code here
    var k = Number(input.trim())
    var start = '1'
    var end = "1"
    var zero = 0
    // console.log(k)
    for (let i = 0; i < k; i++) {
        start += zero
        end += zero
    }
    start = start - 1
    end = end + zero
    for (let i = start + 11; i < end; i += 11) {
        console.log(i)
    }




}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2`);
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