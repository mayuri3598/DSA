function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 2; i < input.length; i++) {
        let str = input[i].trim()
        let count = 0
        // console.log(str)
        for (let j = 0; j < str.length; j++) {
            let res = ''
            for (let k = j; k < str.length; k++) {
                res += str[k]
                // console.log(res)
                let obj = {}
                for (let l = 0; l < res.length; l++) {
                    obj[res[l]] = obj[res[l]] ? obj[res[l]] += 1 : obj[res[l]] = 1
                }
                // console.log(obj)
                let flag = true
                for (let l in obj) {
                    if (obj[l] > 2) {
                        flag = false
                    }
                }
                if (flag) {
                    count++
                }
            }
        }
        console.log(count)
    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`1
    5
    aabba`);
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