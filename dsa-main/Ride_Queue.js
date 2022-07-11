function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");
    let count = 0
    for (let i = 2; i < input.length; i += 2) {
        var arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        for (let j = 0; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[j] > arr[k]) {
                    count++
                    let temp = arr[j];
                    arr[j] = arr[k];
                    arr[k] = temp
                }
            }
        }
        count++
        // console.log(arr)
        console.log(count)
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1
    8
    1 3 2 4 4 5 3 6`);
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