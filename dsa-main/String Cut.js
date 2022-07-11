function runProgram(input) {
    // Write code here
   var input = input.trim().split("");

  //console.log(input);

  let str1 = [];
  let str2 = [];
  let str3 = "";

  if (input.length % 2 == 0) {
    str1 = input.slice(0, input.length / 2);
    str2 = input.slice(input.length / 2, input.length);
    str3 = "";
  } else {
    str1 = input.slice(0, input.length / 2);
    str2 = input.slice(input.length / 2 + 1, input.length);
    str3 = input[Math.floor(input.length / 2)];
  }

  let ans = str1.reverse().join("") + str3 + str2.reverse().join("");
  console.log(ans);

}

if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`abcxyz`);
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