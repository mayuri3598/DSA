function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")
    let arr = input[1].trim().split(" ").map(Number)
    // console.log(arr)
    let i = 0;
    let j = arr.length - 1;
    let min = arr[j]
    let max = arr[0]
    let mid

    while (i != j) {
        if (arr[i] < min && arr[i + 1] < min) {
            max = Math.max(arr[i + 1], max)
            i++
        }
        if (arr[j] > max && arr[j - 1] > max) {
            min = Math.min(arr[j - 1], min)
            j--
        }
        if (min > max) {
            mid = min
            if (arr[i] == arr[j] - 1){
                mid = max
            }
        }
        // console.log("max : ", max)
        // console.log("min : ", min)
        if (i + 1 == j) {
            break
        }
    }

    if (mid) {
        console.log(mid)
    } else {
        console.log(-1)
    }

}


if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`8
    5 6 4 3 5 7 7 8`);
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