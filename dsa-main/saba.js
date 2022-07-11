function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    const [row, col] = input[0].trim().split(" ").map(Number)
    // console.log(row, col)
    let arr = []
    for (let i = 1; i < input.length; i++) {
        arr.push(input[i].trim())
    }
    // console.log(arr)
    let count = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (arr[i][j] == "s" && j < (col - 3)) {
                if (arr[i][j + 1] == "a" && arr[i][j + 2] == "b" && arr[i][j + 3] == "a") {
                    count++
                }
            }
            if (arr[i][j] == "s" && i < (row - 3)) {
                if (arr[i + 1][j] == "a" && arr[i + 2][j] == "b" && arr[i + 3][j] == "a") {
                    count++
                }
            }
            if (arr[i][j] == "s" && i < (row - 3) && j < (col - 3)) {
                if (arr[i + 1][j + 1] == "a" && arr[i + 2][j + 2] == "b" && arr[i + 3][j + 3] == "a") {
                    count++
                }
            }
            if (arr[i][j] == "s" && i > 2) {
                if (arr[i - 1][j + 1] == "a" && arr[i - 2][j + 2] == "b" && arr[i - 3][j + 3] == "a") {
                    count++
                }
            }
        }
    }
    console.log(count)

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5 5
    safer
    amjad
    babol
    aaron
    songs`);
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