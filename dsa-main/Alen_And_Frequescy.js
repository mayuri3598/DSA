function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var str = input[1].trim().split("")
    str.sort()
    var obj = {}
    for (let j = 0; j < str.length; j++) {
        if (obj[str[j]] = obj[str[j]]) {
            obj[str[j]] += 1
        }
        else {
            obj[str[j]] = 1
        }
    }
    // console.log(obj)

    for (const l in obj) {
        console.log(l + "-" + obj[l])
    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`4
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