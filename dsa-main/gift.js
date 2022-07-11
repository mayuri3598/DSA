function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        var arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        allElement(arr)

    }

    function allElement(arr) {
        var obj = {}
        for (let j = 0; j < arr.length; j++) {
            if (obj[arr[j]] = obj[arr[j]]) {
                obj[arr[j]] += 1
            }
            else {
                obj[arr[j]] = 1
            }
        }
        var count = 0
        for (let l in obj) {
            count++
        }
        console.log(count)
    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4
    4
    1 2 2 1`);
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