function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0].trim()
    for (let i = 1; i < input.length; i += 2) {
        var str1 = input[i].trim()
        var str2 = input[i + 1].trim()
        // console.log(str1)
        // console.log(str2)
        if (str2.includes(str1)) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    aac
    aaabab
    abcdef
    abcdef
    abcxyz
    abcxyababcxyzcxyzzabcxyz`);
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