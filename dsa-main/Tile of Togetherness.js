function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    let [ron, harry] = input[0].trim().split(" ").map(Number)
    // console.log(ron, harry)

    tiles(ron, harry)


    function tiles(ron, harry) {
        let str = `${ron}`
        let sum = 0
        for (let i of str) {
            sum += +i
        }
        sum = sum + ron
        if (sum < harry) {
            // console.log(sum)
            tiles(sum, harry)
        }
        if (sum == harry) {
            console.log(sum)
        }
        if (sum > harry) {
            console.log(sum)
        }
    }



}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`119329 117962`);
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