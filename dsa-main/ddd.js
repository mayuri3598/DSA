function runProgram(input) {
    // Write code here
    var newInput = input.trim().split("\n");

    var test = +newInput[0].trim()

    var i = 1
    while (i < newInput.length) {
        var [row, col] = newInput[i].trim().split(" ").map(Number)
        var arr = []
        var count = 0
        for (let j = 0; j < row; j++) {
            arr.push(newInput[i + j + 1].trim())
        }
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr[j].length; k++) {
                if (arr[j][k] == 'i' && k < col - 1) {
                    if (arr[j][k + 1] == 's' && arr[j][k + 2] == 'a') {
                        count++
                    }
                }
                if (arr[j][k] == 'i' && j < row - 2) {
                    if (arr[j + 1][k] == 's' && arr[j + 2][k] == 'a') {
                        count++
                    }
                }
            }
        }
        // console.log(row, col)
        // console.log(arr)
        console.log(count)

        i += row + 1
    }
}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5
    6 4
    wwii
    wais
    riwa
    arsu
    rirs
    urki
    1 3
    sii
    7 2
    ti
    ui
    ks
    tk
    ss
    as
    is
    5 7
    kitissw
    iasikii
    akrtwik
    rksaiww
    itiatwi
    8 9
    aaiaiassi
    issiiasss
    ssiaiisia
    iaiaiissa
    siassiais
    aiisssasa
    isaiiaaii
    ssiassisa`);
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