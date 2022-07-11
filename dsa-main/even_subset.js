function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        var arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        isEven(arr)
    }


    function isEven(arr) {
        var count = 0
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 == 0) {
                count++
                break
            }
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
    1
    5
    4
    1 2 3 48`);
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