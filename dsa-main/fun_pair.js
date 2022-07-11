function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        var arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        var count = 0
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {

                if ((4 * arr[j]) == (5 * arr[k]) && j != k) {
                    // console.log((4 * arr[j]), (5 * arr[k]), j,k)
                    count++
                }
            }
        }
        console.log(count)
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    6
    5 5 5 4 4 4
    3
    0 0 0`);
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