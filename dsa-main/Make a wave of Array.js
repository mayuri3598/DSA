function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    let arr = input[1].trim().split(" ").map(Number);
    // console.log(arr);
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    // console.log(arr.join(" "))
    for (let i = 0; i < arr.length; i += 2) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp
    }
    console.log(arr.join(" "))


}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`10
    9 8 4 10 3 6 5 7 1 2`);
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