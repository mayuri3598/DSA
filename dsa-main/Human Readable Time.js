function runProgram(input) {
    // Write code here
    var no = +input.trim()

    let min = no % 60

    if (min == 0) {
        min = '00'
    }
    let hour = (no - min) / 60

    if (hour == 1) {
        console.log(`${hour}hr ${min}mins`)
    } else {
        console.log(`${hour}hrs ${min}mins`)
    }





}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`125`);
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