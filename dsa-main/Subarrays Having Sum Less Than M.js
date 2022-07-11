function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        const [len, m] = input[i - 1].trim().split(" ").map(Number)
        let arr = input[i].trim().split(" ").map(Number)
        // console.log(arr, m)
        countSub(arr, len, m)
    }

    function countSub(arr, n, k) {
        let start = 0
        let end = 0;
        let count = 0
        let sum = arr[0];
        while (start < n && end < n) {
            if (sum < k) {
                end++;
                if (end >= start) {
                    count += end - start;
                }
                if (end < n) {
                    sum += arr[end];
                }
            }
            else {
                sum -= arr[start];
                start++;
            }
        }
        console.log(count)
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1
    5 5
    1 5 1 3 2`);
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