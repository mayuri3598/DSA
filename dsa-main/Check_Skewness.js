function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0]
    for (let i = 1; i <= len; i++) {
        var no = +input[i].trim()
        // console.log(no)
        var even = 0
        var odd = 0
        for (let j = 2; j <= no; j+=2) {
            if (no % j == 0) {
                even++
            }
        }
        for (let j = 1; j <= no; j+=2) {
            // console.log(j)
            if (no % j == 0) {
                odd++
            }
        }
        // console.log(even)
        // console.log(odd)
        if (even == odd) {
            console.log("Not Skewed")
        }
        else if (even > odd) {
            console.log("Even Skewed")
        }
        else if (odd > even) {
            console.log("Odd Skewed")
        }
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    4
    6
    11
    `);
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