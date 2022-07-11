function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");
    let i = 1
    while (i < input.length) {
        let len = +input[i].trim()
        console.log(len)
        let arr = []
        for (let j = 0; j < len; j++) {
            arr.push(input[i + j + 1].trim().split(" "))
        }
        console.log(arr)
        first(arr)

        i += len + 1
    }
    function first(arr) {
        
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1
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