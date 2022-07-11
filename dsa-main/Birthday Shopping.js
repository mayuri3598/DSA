function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    let [start, end] = input[0].trim().split(" ").map(Number)
    // console.log(start, end)
    for (let i = 1; i <= start; i++) {
        if (end > 1) {
            for (let j = i + 1; j <= start; j++) {
                console.log(i, j)
            }
        }else{
            console.log(i)
        }

    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3 1`);
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