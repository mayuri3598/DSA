function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");
    let count = 0
    for (let i = 2; i < input.length; i += 2) {
        let match = Number(input[i - 1].trim())
        var arr = input[i].trim().split(" ").map(Number)
        console.log(arr)
        // console.log(match)

        var ab = 0
        var virat = 0

        var team = "a"

        for (let j = 0; j < 1; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (team == "a") {
                    ab += arr[k]
                    if (arr[k] == (1 || 3) || (k + 1) % 6 == 0) {
                        team = "v"
                    }
                } else if (team == 'v') {
                    virat += arr[k]
                    if (arr[k] == (1 || 3) || (k + 1) % 6 == 0) {
                        team = "a"
                    }
                }
                // if ((k + 1) % 6 == 0 && arr[k] != (1 || 3)) {
                //     if (team == "a") {
                //         team = "v"
                //     }
                //     if (team == 'v') {
                //         team = 'a'
                //     }
                // }
                // console.log(team)
                // console.log(ab)
                // console.log(virat)
            }
        }
        console.log(ab)
        console.log(virat)
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