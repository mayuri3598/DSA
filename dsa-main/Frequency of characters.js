function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    const str = input[1].trim()
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] = obj[str[i]] ? obj[str[i]] += 1 : obj[str[i]] = 1
    }
    // console.log(obj)
    for (let i in obj) {
        console.log(i, obj[i])
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`10
    zbcdazallz`);
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