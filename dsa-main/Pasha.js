function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0].trim()
    for (let i = 1; i < input.length; i += 2) {
        var str1 = input[i].trim().split("").sort().join("")
        var str2 = input[i + 1].trim().split("").sort().join("")
        if (str1 == str2) {
            console.log("True")
        }else{
            console.log("False")
        }
    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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