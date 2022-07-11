function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    const arr = input[1].trim().split(" ").map(Number)
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] += 1 : obj[arr[i]] = 1
    }
    // console.log(obj)
    let res = []
    for (let i in obj) {
        res.push(i)
    }
    console.log(res.join(" "))

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5
    2 2 2 7 9`);
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