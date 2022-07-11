function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    const [len, k] = input[0].trim().split(" ").map(Number)
    const arr = input[1].trim().split(" ").map(Number)
    // console.log(arr)
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == k) {
                count++
            }
        }
    }
    console.log(count)


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5 9
    3 0 6 2 7`);
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