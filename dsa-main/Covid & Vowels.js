function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")

    let str = input[0].trim()
    // console.log(str)

    let count = 0
    for (let i = 0; i < str.length; i++) {
        let res = ''
        for (let j = i; j < str.length; j++) {
            res += str[j]
            // console.log(res)
            if (res.length > 4 && covid(res)) {
                count++
            }
        }
    }
    console.log(count)

    function covid(str) {
        if (str.includes('a') && str.includes('i') && str.includes('o') && str.includes('u')) {
            return true
        }
        return false
    }

}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`pandemicsituation`);
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