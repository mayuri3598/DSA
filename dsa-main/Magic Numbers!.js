function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");
    var number = input[0];
    var count = 0;
    var discount =0;
    for (var i = 0; i < number.length; i++) {
        if (number[i] == 4) {
            count++
        }
        else if (number[i] == 7) {
            count++
        }
        else{
            discount++
        }


    }
    if (count > 0 && discount == 0) {
        console.log("YES")
    }
    else if (number % 4 == 0 || number % 7 == 0){
        console.log("YES")
    }
    else {
        console.log("NO")
    }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});