function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");
    let i = 1
    while (i < input.length) {
        let [row, col] = input[i].trim().split(" ").map(Number)
        // console.log(row, col)
        let arr = []
        for (let j = 0; j < row; j++) {
            arr.push(input[i + j + 1].trim().split(" "))
        }
        detective(arr, row, col)

        i += row + 1
    }

    function detective(arr, row, col) {
        let right = 0
        let buttom = 0
        let res = ""
        for (let k = 0; k < col; k++) {

            for (let i = 0 + right; i < col; i++) {
                for (let j = 0; j < row - right; j++) {
                    res += arr[j][i] + " "
                    // console.log(arr[j][i])
                }
                break;
            }
            right++
            for (let i = row - 1 - buttom; i >= 0; i--) {
                for (let j = buttom + 1; j < col; j++) {
                    res += arr[i][j] + " "
                    // console.log(arr[i][j])
                }
                break
            }
            buttom++
        }
        console.log(res)
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    3 3
    1 2 3
    4 5 6
    7 8 9
    4 3
    1 2 3
    4 5 6
    7 8 9
    10 11 12`);
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