function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var len = +input[0].trim()
    for (let l = 1; l < input.length; l += 2) {
        var arr = input[l].trim().split(" ").map(Number);
        var k = +input[l+1].trim()
        let stack = []
        let stack2 = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                stack.push(arr[i])
            } else {
                stack2.push(arr[i])
            }
        }
        // arr = stack2.concat(stack)
        // console.log(stack)
        // console.log(stack2)
        // console.log(arr)
        let count = 0
        for (let i = 0; i < stack2.length - 1; i++) {
            if (stack2[i] < stack2[i + 1]) {
                count++
            }
        }
        if (count == stack2.length - 1) {
            console.log("yes")
        } else {
            console.log("no")
        }
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5
    5 1 2 4 3 
    0`);
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