function runProgram(input) {
    // Write code here
    var str = input.trim()
    // console.log(str)
    let max = 0
    for (let i = 0; i < str.length; i++) {
        var res = ''
        for (let j = i; j < str.length; j++) {
            res += str[j]
            // console.log(res)
            let x = checkPalindrom(res)
            if (max < x) {
                max = x
            }
        }

    }
    console.log(max)

    function checkPalindrom(res) {
        let temp = ''
        for (let i = res.length - 1; i >= 0; i--) {
            temp += res[i]
        }
        if (temp == res) {
            return temp.length
        }
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`thisracecarisgood`);
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