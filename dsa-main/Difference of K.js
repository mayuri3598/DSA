function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        var [len, t] = input[i - 1].trim().split(" ").map(Number)
        var arr = input[i].trim().split(" ").map(Number)
        // console.log(arr, t)
        let count = 0
        let j = 0
        let k = 0
        while (count == 0) {
            while (count == 0) {
                if ((arr[j] - arr[k]) == t && j != k) {
                    count++
                    break
                }
                k++
            }
            j++
        }
        if (count == 1) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5`);
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