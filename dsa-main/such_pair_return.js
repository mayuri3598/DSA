function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")

    for (var i = 1; i < input.length; i += 2) {
        var [len, t] = input[i].trim().split(" ").map(Number)
        var arr = input[i + 1].trim().split(" ").map(Number)
        // console.log(arr, t)
        var count = 0
        for (let j = 0; j < len; j++) {
            for (let k = 0; k < len; k++) {
                if (arr[j] + arr[k] == t && j != k) {
                    count++
                    break;
                }
            }
            if (count == 1) {
                break;
            }
        }
        if (count == 1) {
            console.log(1)
        } else {
            console.log(-1)
        }
    }

}
 
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
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