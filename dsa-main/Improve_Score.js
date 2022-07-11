function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 1; i < input.length; i += 2) {
        var [len, T] = input[i].trim().split(" ").map(Number)
        var arr = input[i + 1].trim().split(" ").map(Number)
        var sum = 0
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j]
        }
        // console.log(sum)
        if (sum < T) {
            console.log(sum)
        } else {
            console.log(T)
        }

    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    4 10
    1 2 3 4
    4 5
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