function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")

    let mat = []
    for (let i = 0; i < input.length; i++) {
        mat.push(input[i].trim().split(" "))
    }
    // console.log(mat)
    let winner = ''
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (j == 0) {
                if (mat[i][j] == 'o' && mat[i][j + 1] == 'o' && mat[i][j + 2] == 'o') {
                    winner = "o"
                }
            }
            if (j == 0) {
                if (mat[i][j] == 'x' && mat[i][j + 1] == 'x' && mat[i][j + 2] == 'x') {
                    winner = "x"
                }
            }
            if (i == 0) {
                if (mat[i][j] == 'o' && mat[i + 1][j] == 'o' && mat[i + 2][j] == 'o') {
                    winner = "o"
                }
            }
            if (i == 0) {
                if (mat[i][j] == 'x' && mat[i + 1][j] == 'x' && mat[i + 2][j] == 'x') {
                    winner = "x"
                }
            }
            if (i == 0 && j == 0) {
                if (mat[i][j] == 'o' && mat[i + 1][j + 1] == 'o' && mat[i + 2][j + 2] == 'o') {
                    winner = "o"
                }
            }
            if (i == 0 && j == 0) {
                if (mat[i][j] == 'x' && mat[i + 1][j + 1] == 'x' && mat[i + 2][j + 2] == 'x') {
                    winner = "x"
                }
            }
            if (i == mat.length - 1 && j == 0) {
                if (mat[i][j] == 'o' && mat[i - 1][j + 1] == 'o' && mat[i - 2][j + 2] == 'o') {
                    winner = "o"
                }
            }
            if (i == mat.length - 1 && j == 0) {
                if (mat[i][j] == 'x' && mat[i - 1][j + 1] == 'x' && mat[i - 2][j + 2] == 'x') {
                    winner = "x"
                }
            }
        }
    }
    if (winner == '') {
        console.log("Tie")
    } else {
        if (winner == 'o') {
            console.log("o")
        } else {
            console.log("x")
        }
    }
}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`x o x
                o x o
                x o o`);
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