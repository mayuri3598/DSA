function runProgram(input) {
    // Write code here
    var newInput = input.trim().split('\n');
    var len = +newInput[0]
    var arr = newInput[1].trim().split(" ").map(Number)

    function quickSort(arr, n) {
        if (n == arr.length) {
            return arr
        }
        for (let i = n; i < arr.length; i++) {
            
        }
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5
    3 5 0 9 8`);
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