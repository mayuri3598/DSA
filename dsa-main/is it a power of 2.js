function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0]
    for (let i = 1; i <= len; i++) {
        var no = +input[i].trim()
        // console.log(no)
        if (no == 1) {
            console.log("YES")
        } else {
            isPowerofTwo(no)
        }

    }
    function isPowerofTwo(no) {
        if (no % 2 == 0 && no / 2 > 1) {
            // console.log(no)
            isPowerofTwo(no / 2)
        } else {
            if (no % 2 == 1) {
                console.log("NO")
            } else {
                console.log("YES")
            }
        }
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5
    1
    2
    16
    20
    100`);
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