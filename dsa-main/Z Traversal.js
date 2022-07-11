function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");
    let i = 1
    while (i < input.length) {
        let len = +input[i].trim()
        // console.log(len)
        let arr = []
        for (let j = 0; j < len; j++) {
            arr.push(input[i + j + 1].trim().split(" "))
        }
        // console.log(arr)
        if (len > 1) {
            Traversal(arr)
        } else {
            console.log(arr[0][0])
        }


        i += len + 1
    }

    function Traversal(arr) {
        let res = []
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (i == 0) {
                    res.push(arr[i][j])
                }
                if (i > 0 && i < arr.length - 1 && i + j == arr.length - 1) {
                    res.push(arr[i][j])
                }
                if (i == arr.length - 1) {
                    res.push(arr[i][j])
                }
            }
        }
        console.log(res.join(" "))
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1
    1
    5
    3
    1 2 3
    4 5 6
    7 8 9
    5
    1 2 3 1 2
    4 5 6 1 2
    7 8 9 1 2
    7 8 9 1 2
    7 8 9 1 2`);
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