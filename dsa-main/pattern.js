function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")
    let n = +input[0].trim()

    let res = []
    if (n == 0) {
        console.log(0)
    } else {
        let flag = true
        for (let i = 0; i < n; i++) {
            let temp = []
            if (flag) {
                for (let j = 0; j < n; j++) {
                    temp.push(j)
                }
                flag = false
            } else {
                for (let j = 0; j < n; j++) {
                    temp.push(i)
                }
                flag = true
            }
            res.push(temp)
        }
    }
    // console.log(res)
    for (let i = 0; i < res.length; i++) {
        let mes = ''
        for (let j = 0; j < res.length; j++) {
            mes += res[j][i] + " "
        }
        console.log(mes)
    }
    
}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1`);
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