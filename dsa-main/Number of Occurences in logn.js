function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    let [len, k] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            count++
        }
    }
    console.log(count)




}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`6 3
    2 3 3 3 6 9`);
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