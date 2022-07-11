function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var [row, col] = input[0].trim().split(" ").map(Number)

    let count = 0

    for (let i = 1; i < input.length; i++) {
        let arr = input[i].trim().split(" ").map(Number)
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > 1 && isPrime(arr[j])) {
                count++
            }
        }
    }
    console.log(count)

    function isPrime(no) {
        for (let i = 2; i <= Math.sqrt(no); i++) {
            if (no % i == 0) {
                flag = false
                return false
            }
        }
        return true
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3 3
    1 2 3 
    4 5 6
    7 8 9`);
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