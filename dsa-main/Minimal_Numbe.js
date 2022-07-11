function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0]
    for (let i = 2; i < input.length; i += 2) {
        var arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        var zero = ""
        for (let j = 0; j < arr.length-1; j++) {
            for (let k = 0; k < arr.length - j - 1; k++) {
                if (arr[j] >= arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        console.log(arr.join(""))

    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
4
2 1 0 0
4
1 4 2 3
4
5 2 3 2`);
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