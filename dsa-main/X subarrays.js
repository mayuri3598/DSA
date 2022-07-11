function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        let [len, k, x] = input[i - 1].trim().split(" ").map(Number)
        var arr = input[i].trim().split(" ").map(Number)
        // console.log(arr, k, x)
        countSubstring(arr, k, x)
    }

    function countSubstring(arr, k, x) {
        let count = 0
        let sub = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] <= k) {
                sub.push(arr[i]);
            } else {
                sub = []
            }
            if (sub.length == x) {
                count++
                sub.shift()
            }
        }
        console.log(count)
    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1
    5 3 3
    1 3 3 5 1`);
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