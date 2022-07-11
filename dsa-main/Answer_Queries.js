function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var arr1 = input[1].trim().split(" ").map(Number);
    var arr2 = input[3].trim().split(" ").map(Number);

    for (let j = 0; j < arr2.length; j++) {
        var count = 0
        for (let k = j + 1; k < arr1.length; k++) {
            if (arr2[j] == arr1[k]) {
                count++
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
    runProgram(`5
    1 2 3 4 5
    3
    3 5 7`);
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