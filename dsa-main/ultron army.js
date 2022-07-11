function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");
    let [len, X] = input[0].trim().split(" ").map(Number)
    let arr = input[1].trim().split(" ").map(Number)
    let sum = 0
    for (let i = 3; i < input.length; i++) {
        let [start, end] = input[i].trim().split(" ").map(Number)
        let count = 0

        for (let j = start - 1; j < end; j++) {
            for (let k = j + 1; k < end; k++) {
                if (arr[j] + arr[k] == X && j != k) {
                    count++
                }
            }
        }
        sum += count
    }
    console.log(sum)

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`7 10
    2 9 1 8 4 4 6
    5
    1 7
    2 5
    1 6
    3 4
    4 5`);
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