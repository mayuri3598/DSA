function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n")

    for (let i = 1; i < input.length; i += 2) {
        let over = +input[i].trim();
        let ball = input[i + 1].trim().split(" ").map(Number);
        // console.log(ball, over)
        let ab = 0;
        let virat = 0;
        let flag = true;
        for (let j = 0; j < over; j++) {
            for (let k = j * 6; k < j * 6 + 6; k++) {
                if (flag) {
                    ab += ball[k]
                    if (ball[k] == 1 || ball[k] == 3) {
                        flag = !flag
                    }
                } else {
                    virat += ball[k]
                    if (ball[k] == 1 || ball[k] == 3) {
                        flag = !flag
                    }
                }
            }
            flag = !flag
        }
        if (ab > virat) {
            console.log("AB de Villiers")
        } else if (virat > ab) {
            console.log("Virat Kohli")
        } else {
            console.log("Tie")
        }
    }

}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`3
    2
    1 2 0 0 1 1 6 6 4 1 6 1
    3
    0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
    1
    0 1 0 1 0 0`);
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