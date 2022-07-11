function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0]
    for (let i = 1; i <= len; i++) {
        var no = +input[i].trim()
        // console.log(no)
        if (no == 1) {
            console.log("No")
        } else {
            isPrime(no)
        }

    }
    function isPrime(no) {
        let flag = true
        for (let i = 2; i <= Math.sqrt(no); i++) {
            if (no % i == 0) {
                flag = false
                break;
            }
        }
        if (flag) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`11
    1
    2
    3
    4
    5
    6
    7
    8
    9
    10
    11`);
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