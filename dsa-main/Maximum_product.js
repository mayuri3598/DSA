function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        var arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        var res
        for (let j = 0; j < arr.length; j++) {
            var pro = 1
            for (let k = j; k < arr.length; k++) {
                pro *= arr[k]
                if (res == undefined) {
                    res = pro
                }
                else if (res < pro) {
                    res = Math.abs(pro)
                }
            }

        }
        console.log(res)
        res = undefined
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
        3
        -3 10 8
        4
        4 5 -1 2`);
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