function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")

    for (var i = 1; i < input.length; i += 2) {
        var c = input[i].trim().split(".").map(Number)
        var n = input[i + 1].trim().split(".").map(Number)
        // console.log(c)
        // console.log(n)
        if (n[0] > c[0]) {
            console.log("True")
        }
        else if (n[0] == c[0]) {
            if (n[1] > c[1]) {
                console.log("True")
            }
            else if (n[1] == c[1]) {
                if (n[2] > c[2]) {
                    console.log("True")
                } else {
                    console.log("False")
                }
            }
            else {
                console.log("False")
            }
        }
        else {
            console.log("False")
        }
    }

}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    2.0.1
    1.9.8
    12.0.1
    12.10.0
    1.1.10
    1.1.12`);
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