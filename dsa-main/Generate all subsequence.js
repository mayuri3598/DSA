function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0].trim()
    var arr = input[1].trim()
    // console.log(arr, len)
    let res = []
    for (var i = 1; i < (1 << arr.length); i++) {
        var subset = "";
        for (var j = 0; j < arr.length; j++) {
            if (i & (1 << j)) {
                subset += arr[j]
            }
        }
        res.push(subset)
    }
    // res.sort()
    // console.log(res)
    for (let i = 0; i < res.length; i++) {
        console.log(res[i])
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`4
    abcd`);
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