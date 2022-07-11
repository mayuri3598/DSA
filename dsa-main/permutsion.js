function runProgram(input) {
    // Write code here
    var newInput = input.trim().split('\n');
    var n = +newInput[0]
    var arr = newInput[1].trim().split(" ").map(Number)

    // console.log(arr, n)
    Permutations(arr, 0, 0)

    function Permutations(arr, n, l) {
        if (n == arr.length) {
            return
        }

        for (let i = 0; i < arr.length; i++) {
            let res = [arr[l]]
            for (let j = 0; j < arr.length; j++) {
                if (l != j) {
                    res.push(arr[j])
                }
            }
            console.log(res.join(" "))
        }


        Permutations(arr, n + 1, l + 1)
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
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