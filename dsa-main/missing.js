function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i += 2) {
        var arr = input[i].trim().split(" ").map(Number)
        // console.log(arr)
        var repeat
        count = 1
        var obj = {}
        for (let j = 0; j < arr.length; j++) {
            if (obj[arr[j]] = obj[arr[j]]) {
                obj[arr[j]] += 1
            }
            else {
                obj[arr[j]] = 1
            }
        }
        // console.log(obj)
        for (let l in obj) {
            if (obj[l] == 2) {
                repeat = l
            }
        }
        const x = mis(obj)
        if (x == undefined) {
            console.log(arr.length, repeat)
        }else{
            console.log(x, repeat)
        }

    }

    function mis(obj) {
        var count = 1
        for (let l in obj) {
            if (+l != count) {
                return count
            }
            count++
        }
    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    5
    1 2 2 4 5
    2
    1 1
    3
    1 2 2`);
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