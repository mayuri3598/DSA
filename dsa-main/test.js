function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")
    var n = +input;
    //  console.log(n);

    for (var i = 0; i < n; i++) {
        var result = [];
        for (var j = 0; j < n; j++) {
            if (j % 2 == 0) {
                result.push(i)
            }
            else if (j % 2 == 1) {
                result.push(j)
            }


        }
        console.log(result.join(" "))
    }

}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1`);
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