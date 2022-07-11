function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        let arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        let max = arr[0]
        for (let j = 0; j < arr.length; j++) {
            if (max < arr[j]) {
                max = arr[j]
            }
        }
        // console.log(max)
        sub(arr, max)
    }

    function sub(arr, max) {
        var count = 0
        for (var i = 1; i < (1 << arr.length); i++) {
            var subset = [];
            for (var j = 0; j < arr.length; j++) {
                if (i & (1 << j) && arr[i] != max && arr[j] != max) {
                    subset.push(arr[j]);
                }
            }
            var sum = 0
            for (let j = 0; j < subset.length; j++) {
                sum += subset[j]
            }
            if (sum == max) {
                count++
                break;
            }
        }
        if (count > 0) {
            console.log("Yes")
        } else {
            console.log("No")
        }
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    3
    1 2 3
    4
    0 1 2 3
    4
    2 3 6 10`);
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