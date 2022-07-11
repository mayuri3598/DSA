function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        var arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        var count = 0
        for (let j = 0; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[j] == arr[k]) {
                    count++
                }
            }
            if (count > 0){
                break;
            }
        }
        if (count == 0) {
            console.log("NO")
        } else {
            console.log("YES")
        }
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    1
    1
    2
    1 1
    3
    1 2 3`);
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