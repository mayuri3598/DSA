function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        let str = input[i].trim()
        // console.log(str)
        for (let j = 0; j < str.length; j++) {
            let res = ''
            for (let k = j; k < str.length; k++) {
                res += str[k]
                console.log(res)
            }
        }
    }




}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1
    4 
    aman`);
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