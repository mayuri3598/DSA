function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    const len = +input[0].trim()
    let str = input[1].trim()
    // console.log(str)

    minions(str)

    function minions(str) {
        let count = 0
        for (let i = 0; i < str.length - 1; i++) {
            if (str[i] != str[i + 1]) {
                count++
            }
        }
        if (count == str.length - 1) {
            console.log(str)
            return
        }
        if(count == 0){
            console.log(-1)
            return
        }
        let res = ''
        let j = 0
        while (j < str.length) {
            if (str[j] == str[j + 1]) {
                res += ''
                let temp = str.slice(j + 2, str.length)
                res += temp;
                break;
            } else {
                res += str[j]
            }
            j++
        }

        minions(res)
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`12
    abbabaadcbbc`);
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