function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")

    let [row, col] = input[0].trim().split(" ").map(Number)
    // console.log(row, col)
    let mat = []
    for (let i = 1; i < input.length; i++) {
        mat.push(input[i].trim().split(" ").map(Number))
    }
    // console.log(mat)

    for (let i = 0; i < col; i++) {
        let res = []
        for (let j = 0; j < row; j++) {
            res.push(mat[j][i])
        }
        console.log(res.join(" "))
    }

}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
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