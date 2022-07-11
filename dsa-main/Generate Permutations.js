function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")

    let arr = input[1].trim().split(" ").map(Number)
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            let res = [arr[i]]
            for (let k = 0; k < arr.length; k++) {
                if (j != k) {
                    res.push(arr[k])
                }
            }
            console.log(res.join(" "))
        }
    }

}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    1 2 3`);
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