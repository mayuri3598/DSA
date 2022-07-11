function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var [len, k] = input[0].trim().split(" ").map(Number)
    var arr = input[1].trim().split(" ").map(Number)

    console.log(arr, k)

    leftRotate(arr, k)

    function leftRotate(arr, k) {
        for (i = 0; i < k; i++) {
            for (let j = 0; j < arr.length; j++) {
                let temp = arr[j];
                arr[j] = arr[arr.length - 1 - j]
                arr[arr.length - 1 - j] = temp
            }
        }
        console.log(arr)

    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`6 4
    1 2 5 4 0 6`);
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