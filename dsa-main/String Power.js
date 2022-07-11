//Enter code here
function runProgram(input) {
    // Write code here
    var input = input.trim().split('\n')
    var test = input[0]
    var max = 1
    var count = 1
    for(let i = 1;i<=test;i++){
        max = 1
        var str = input[i]
        for(let j = 0;j<str.length;j++){
            if(str[j] == str[j+1]){
                count++
                //console.log(max)
            }else{
                count=1
            }
            if(max <= count){
                max=count
            }
            
        }
        console.log(max)
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