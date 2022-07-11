function runProgram(input) {
    // Write code here
    var input = input.trim().split('\n');
    for (let i = 1; i < input.length; i++) {
        if (i % 2 == 0) {
            var str = input[i].trim()
            //console.log(str)
            let l = 0
            let r = 0
            let u = 0
            let d = 0
            for (let j = 0; j < str.length; j++) {
                if (str[j] == "L") {
                    l++
                }
                else if (str[j] == "R") {
                    r++
                }
                else if (str[j] == "D") {
                    u++
                }
                else if (str[j] == "U") {
                    d++
                }
            }
            if (l == r && u == d) {
                console.log("Yes")
            }
            else {
                console.log("No")
            }
        }
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    5
    RLRUD
    4
    LRUD`);
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