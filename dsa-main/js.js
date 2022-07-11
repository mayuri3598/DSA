function runProgram(input) {
    // Write code here
    var newInput = input.trim().split('\n');

    var len = +newInput[0]

    for (var i = 2; i < newInput.length; i += 3) {
        let str1 = newInput[i].trim()
        let str2 = newInput[i + 1].trim()
        equal(str1, str2)
        // console.log(str1, str2)
    }

    function equal(str1, str2) {
        if (str1 == str2) {
            return console.log("Yes")
        }
        
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    2
    ab
    ac
    3
    aba
    aab`);
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