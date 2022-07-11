function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        let arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        nextGreaterElement(arr)
    }
    function nextGreaterElement(arr) {
        let j = 0;
        let k = arr.length - 1;
        while (j < k) {
            let temp = arr[j]
            arr[j] = arr[k]
            arr[k] = temp

            j++
            k--
        }
        // console.log(arr)
        let stack = []
        let res = []
        for (let i = 0; i < arr.length; i++) {
            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop()
            }
            if (stack.length == 0) {
                res.push(-1)
            } else {
                res.push(stack[stack.length - 1])
            }
            stack.push(arr[i])
        }
        // console.log(res.join(" "))
        reverse(res)
    }

    function reverse(arr) {
        let j = 0;
        let k = arr.length - 1;
        while (j < k) {
            let temp = arr[j]
            arr[j] = arr[k]
            arr[k] = temp

            j++
            k--
        }
        console.log(arr.join(" "))
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1
    4
    1 3 2 4`);
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