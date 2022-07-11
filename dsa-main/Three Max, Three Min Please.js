function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    let ar = input[1].trim().split(" ").map(Number);
    if (ar.length > 5) {
        let obj = {}
        for (let i = 0; i < ar.length; i++) {
            obj[ar[i]] = obj[ar[i]] ? obj[ar[i]] += 1 : obj[ar[i]] = 1
        }
        let arr = []
        for (let i in obj) {
            arr.push(+i)
        }
        // console.log(arr)

        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp
                }
            }
        }
        console.log(arr[0], arr[1], arr[2])
        console.log(arr[arr.length - 3], arr[arr.length - 2], arr[arr.length - 1])
    }else{
        console.log("Not Possible")
        console.log("Not Possible")
    }




}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`8
    1 2 3 4 2 `);
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