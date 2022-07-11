function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")

    let arr = input[1].trim().split(" ").map(Number)
    // console.log(arr)

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    // console.log(sum)

    let res = 0
    let flag = true
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]
        if ((sum - res - arr[i + 1]) == res) {
            console.log(i + 2)
            flag = false
            break
        }
    }
    if (flag) {
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