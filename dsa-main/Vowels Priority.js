function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0]
    for (let i = 1; i <= len; i++) {
        var str = input[i].trim()
        // console.log(str)
        let v = ''
        let c = ''
        for (let j = 0; j < str.length; j++) {
            if (str[j] == 'a' || str[j] == 'e' || str[j] == 'i' || str[j] == 'o' || str[j] == 'u') {
                v += str[j]
            } else {
                c += str[j]
            }
        }
        console.log(v + c)
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`4
    eio
    masaischool
    ubcdefghioel
    rhythm`);
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