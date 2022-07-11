function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    let [a, b, c, L, R] = input[0].trim().split(" ").map(Number);
    // console.log(a, b, c, L, R)

    let pro = 1;
    for (let i = L; i <= R; i++) {
        pro *= (a) * (i ** 2) + (b * i) + c
    }
    console.log(pro)

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`-1 3 8 -2 2`);
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