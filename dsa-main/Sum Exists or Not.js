function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0].trim()
    var arr = input[1].trim().split(" ").map(Number);
    var k = +input[2].trim()
    // console.log(arr)
    var flag = true
    for (var i = 1; i < (1 << arr.length); i++) {
        var subset = [];
        for (var j = 0; j < arr.length; j++) {
            if (i & (1 << j)) {
                subset.push(arr[j]);
            }
        }
        var sum = 0
        for (let j = 0; j < subset.length; j++) {
            sum += subset[j];
        }
        if (sum == k) {
            console.log("yes");
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log("no");
    }






}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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