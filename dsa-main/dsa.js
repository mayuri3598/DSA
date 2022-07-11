function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    let len = +input[0].trim()
    let arr = input[1].trim().split(" ").map(Number)

    let sum = 0
    for (let i = 0; i < len; i++) {
        sum += arr[i]
    }
    // console.log(sum)

    let temp = 0
    let element
    for (let i = 0; i < len; i++) {
        temp += arr[i]
        if ((sum - temp - arr[i + 1]) == temp) {
            element = i + 2;
            break;
        }
    }
    if (element) {
        console.log(element)
    } else {
        console.log(-1)
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5
    3 3 5 5 1`);
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