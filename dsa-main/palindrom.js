function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0]

    for (let i = 2; i < input.length; i += 2) {
        str = input[i].trim();
        // console.log(str)
        var obj = {}
        let odd = 0
        for (let j = 0; j < str.length; j++) {
            obj[str[j]] = obj[str[j]] ? obj[str[j]] += 1 : obj[str[j]] = 1
        }
        // console.log(obj)
        for (let k in obj) {
            if (obj[k] % 2 == 1){
                odd++
            }
        }
        if (odd <= 1) {
            console.log("Yes")
        }
        else {
            console.log("No")
        }
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    6
    aabbcc
    5
    aabcd`);
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