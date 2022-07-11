function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        let arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        let flag = false
        for (let j = 0; j < arr.length - 2; j++) {
            if (arr[j] % 2 == 0 && arr[j + 1] % 2 == 0 && arr[j + 2] % 2 == 0) {
                flag = true
                break;
            }
        }
        if (flag) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    3
    1 2 3
    5
    1 2 4 6 8`);
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