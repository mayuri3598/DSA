function runProgram(input) {
    // Write code here
    var newInput = input.trim().split('\n');
    let len = Number(newInput[0])
    let arr = newInput[1].trim().split(" ").map(Number)
    //console.log(len, arr)
    let res = []
    let i = 0
    while (i < len) {
        var k;
        var count = 0
        var max = arr[i]
        //console.log(i, max)
        for (let j = i + 1; j < len; j++) {
            if (max < arr[j]) {
                //console.log(arr[j])
                max = arr[j]
                k = j
                count++
            }
        }
        //console.log(arr[i])
        //console.log(k)
        if (count > 0) {
            res.push(arr[k])
        }

        i += k + 1
    }
    res.push(arr[arr.length - 1])
    console.log(res.join(" "))

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`11
    16 17 4 3 5 2 18 9 6 10 2`);
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