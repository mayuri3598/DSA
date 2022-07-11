function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0].trim()
    for (let i = 1; i < input.length; i++) {
        var no = +input[i].trim()
        if (no != 1) {
            let x = check(no)
            // console.log(x)
            return x
        }
        
        if (no == 1) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }

    function check(no) {
        console.log(no)
        if (no <= 1) {
            let x = no
            console.log(x)
        }
        no = no / 10
        if (no != 1) {
            no = no / 20
        }
        check(no)
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5
    1
    2
    10
    2000000000
    200`);
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