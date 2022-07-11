function runProgram(input) {
    // Write code here
    var no = +input.trim();


    console.log(Fibonocci(no))

    function Fibonocci(n) {
        if (n == 0)
            return 0;
        if (n == 1)
            return 1;
        return Fibonocci(n - 1) + Fibonocci(n - 2)
    }



}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`8`);
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