function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var str1 = input[0].trim()
    var str2 = input[1].trim()
    console.log(str1)
    console.log(str2)
    let strRes = ''
    for (let i = 0; i < str1.length;i++){
        
    }





}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`Hello , Sir
    sjjiytyfqp`);
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