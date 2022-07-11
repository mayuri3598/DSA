function runProgram(input) {
    // Write code here
    var newInput = input.trim().split('\n')
    var len = Number(newInput[0].trim())
    var str = newInput[1].trim()
    //console.log(len)
    var res = []
    for (let i = 0; i < len; i++) {
        if (test(res) == str[i]) {
            res.pop()
        } else {
            res.push(str[i])
        }
    }
    if (res.length != 0) {
        console.log(res.join(""))
    } else {
        console.log(-1)
    }


    function test(s) {
        if (s.lenth == 0) {
            return "e"
        }
        return s[s.length - 1]
    }
}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`12
    abbabaadcbbc`);
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