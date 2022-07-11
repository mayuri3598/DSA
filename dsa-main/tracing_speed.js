function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var str = input[0].trim()
    var test = input[1].trim()
    console.log(str)
    console.log(test)
    var speed = 0
    var max = 0
    for (let i = 0; i < test.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (test[i] == str[j] && i == 0) {
                speed = speed + j
                max = j
            }
            if (test[i] == str[j] && i > 0) {
                if (max > j) {
                    let temp = speed - j
                    speed = speed - temp
                    max = j
                } else {
                    
                    speed = speed + max
                    max = j
                }
            }
        }
    }
    console.log(speed)


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`pqrstuvwxyzabcdefghijklmno
    hello`);
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