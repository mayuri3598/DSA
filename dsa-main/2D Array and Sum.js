function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    const [row, col, p] = input[0].trim().split(" ").map(Number)
    // console.log(row, col, p)
    let arr = []
    for (let i = 1; i < input.length; i++) {
        arr.push(input[i].trim().split(" ").map(Number))
    }
    // console.log(arr)
    let count = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (j < (col - 2)) {
                if ((arr[i][j] + arr[i][j + 1] + arr[i][j + 2]) == p) {
                    count++
                }
            }
            if (i < (row - 2)) {
                if ((arr[i][j] + arr[i + 1][j] + arr[i + 2][j]) == p) {
                    count++
                }
            }
            if (i < (row - 2) && j < (col - 2)) {
                if ((arr[i][j] + arr[i + 1][j + 1] + arr[i + 2][j + 2]) == p) {
                    count++
                }
            }
            if (i > 1) {
                if ((arr[i][j] + arr[i - 1][j + 1] + arr[i - 2][j + 2]) == p) {
                    count++
                }
            }
        }
    }
    console.log(count)

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3 3 6
    3 2 1
    2 2 2
    3 5 1`);
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