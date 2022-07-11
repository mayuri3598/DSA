function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")
    let arr = input[1].trim().split(" ").map(Number)
    // console.log(arr)
    let left = []
    let right = []
    let min = arr[arr.length - 1]
    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        max = Math.max(arr[i + 1], max)
        left[i] = max
    }
    // console.log(left)

    for (let i = arr.length - 1; i >= 0; i--) {
        min = Math.min(arr[i - 1], min)
        right[i] = min
    }
    // console.log(right)

    let mid
    let s = 0
    let l = arr.length - 1
    while (mid == undefined && s < left.length && l > 1) {
        if (left[s] < right[l]) {
            s++
        }
        if (left[s] == right[l - 1]) {
            l--
        }
        if (left[s] > right[l]) {
            l--
        }
        // console.log(s,l)

        if (left[s] == right[l]) {
            mid = left[s]
        }
    }

    if (mid) {
        console.log(mid)
    } else {
        console.log(-1)
    }

}


if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5
    4 3 6 7 8`);
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