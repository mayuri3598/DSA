function runProgram(input) {
    // Write code here
    var no = +input.trim()

    let lastStep = no % 5

    let firstStep = (no - lastStep) / 5

    if (lastStep == 0) {
        console.log(firstStep)
    }else{
        console.log(firstStep + 1)
    }




}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`83`);
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