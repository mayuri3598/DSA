function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0];
    str = input[1].trim();
    // console.log(str);
    let temp = '';
    for (let i = len - 1; i >= 0; i--) {
        temp += str[i]
    }

    if (temp == str) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }




}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`6
    nrupul`);
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