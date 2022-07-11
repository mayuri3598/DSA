function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")

    var num = +input[0]
    var arr = input[1].trim().split(" ").map(Number)

    // console.log(num, arr)

    function Largest(arr, num) {
        var max = arr[num - 1]
        while (num >= 0) {
            if (max < arr[num]) {
                max = arr[num]
            }
            num -= 1
        }
        return max, Largest(arr, num - 1)
    }

    function Smallest(arr, num) {
        var min = arr[num - 1]
        while (num >= 0) {
            if (min > arr[num]) {
                min = arr[num]
            }
            num -= 1
        }
        return min
    }

    console.log(Smallest(arr, num))
    console.log(Largest(arr, num))

}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`4
    22 -2 8 15`);
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