function runProgram(input) {
    // Write code here
    var bill = +input.trim() - 80

    // console.log(bill)

    let unit = 0

    if (bill <= 150) {
        unit = bill / 3
        bill = 0
    } else if (bill > 150) {
        bill = bill - 150
        unit = 50
    }

    if (bill <= 500) {
        let temp = bill / 5
        unit = unit + temp
        bill = 0
    } else if (bill > 500) {
        bill = bill - 500
        unit = unit + 100
    }

    if (bill > 0) {
        let temp = bill / 10
        unit = unit + temp
    }



    // console.log(bill)
    console.log(unit)

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`930`);
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