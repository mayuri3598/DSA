function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    var arr = input[1].trim().split(" ").map(Number)

    for (i = 0; i < arr.length; i++) {
        var pos = sort(arr, arr.length, i);
        temp = arr[i];
        arr[i] = arr[pos];
        arr[pos] = temp;
    }

    function sort(a, n, i) {
        var small = a[i];
        var pos = i;
        for (j = i + 1; j < 10; j++) {
            if (a[j] < small) {
                small = a[j];
                pos = j;
            }
        }
        return pos;
    }

    console.log(arr.join(" "))


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5
    3 5 0 9 8`);
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