function runProgram(input) {
    // Write code here
    var newInput = input.trim().split('\n');

    var len = +newInput[0]
    var arr = newInput[1].trim().split(" ").map(Number)

    var odd = 0
    var even = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            even += arr[i]
        } else {
            odd += arr[i]
        }
    }
    if (even > odd) {
        console.log("Even")
    } else {
        console.log("Odd")
    }
    // console.log(even)
    // console.log(odd)
}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`4
    1 2 3 4`);
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