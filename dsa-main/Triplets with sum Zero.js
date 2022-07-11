function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    const len = +input[0];
    let arr = input[1].trim().split(" ").map(Number)
    // console.log(arr)

    let count = 0;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    count++
                }
            }
        }
    }
    console.log(count);




}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    -1 -2 3`);
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