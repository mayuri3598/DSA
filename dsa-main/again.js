function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var str = input[1].trim().split(" ")
    // console.log(str.length)
    var obj = {}
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] = obj[str[i]]) {
            obj[str[i]] += 1
        }
        else {
            obj[str[i]] = 1
        }
    }
    var sum = 0
    for (let i in obj) {
        sum += Number(i)
    }
    console.log(sum)




}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5
    2 2 2 1 1`);
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