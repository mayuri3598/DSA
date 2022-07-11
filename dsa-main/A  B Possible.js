function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    for (let i = 1; i < input.length; i++) {
        let [a, b] = input[i].trim().split(" ").map(Number);
        // console.log(a, b);
        if (a == b || b % a == 0) {
            console.log("Possible")
        }
        else if (a > b) {
            console.log("Not Possible")
        } else {
            checkRoute(a, b)
        }
    }
    function checkRoute(a, b) {
        let num1 = a * 2
        if (num1 == b) {
            console.log("Possible")
            return
        } else if (num1 > b) {
            console.log("Not Possible")
            return
        } else {
            let temp = +(`${num1}1`)
            if (temp == b) {
                console.log("Possible")
                return
            } else if (temp > b) {
                console.log("Not Possible")
                return
            } else {
                checkRoute(temp, b)
            }
        }
    }


}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`4
    6 242
    3 3
    6 3
    10 30
    59 236`);
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