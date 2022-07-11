function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 1; i < input.length; i++) {
        let [x, y, z] = input[i].trim().split(" ").map(Number)
        let max = z - x;
        if ((z - y) > max) {
            max = z - y;
            console.log(max)
        }
        else {
            console.log(max)
        }
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    2 3 4
    1 1 5`);
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