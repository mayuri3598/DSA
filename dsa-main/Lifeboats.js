function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        let [len, w] = input[i - 1].trim().split(" ").map(Number);
        var arr = input[i].trim().split(" ").map(Number);
        console.log(arr, w)
        

    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    4 5
    3 5 3 4
    4 3
    1 2 2 3`);
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