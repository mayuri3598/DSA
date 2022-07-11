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
        // console.log(arr)
        rowCheck(arr, row, col)

        i += row + 1
    }

    function rowCheck(arr, row, col) {
        let obj = {}
        for (let i = 0; i < col; i++) {
            let count = 1
            for (let j = 0; j < row - 1; j++) {
                // console.log(arr[j][i], arr[j + 1][i])
                if (arr[j][i] == arr[j + 1][i]) {
                    count++
                }
                if (count == row) {
                    if (obj[arr[j][i]] = obj[arr[j][i]]) {
                        obj[arr[j][i]] += 1
                    } else {
                        obj[arr[j][i]] = 1
                    }
                }
            }
            // console.log(obj)
        }
        let count = 0
        for (let i in obj) {
            count++
        }
        console.log(count)
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    4 3
    1 2 1 
    1 2 1
    1 2 1
    1 2 1
    3 4
    1 2 3 4
    1 1 3 4
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