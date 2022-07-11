function runProgram(input) {
    // Write code here
    var input = input.trim().split("\n");

    let len = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    // console.log(arr);

    console.log(mergeSort(arr).join(" "))

    function mergeSort(arr) {
        if (arr.length <= 1) {
            return arr
        };
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return merge(left, right);
    }

    function merge(arr1, arr2) {
        let results = [];
        let i = 0;
        let j = 0;
        while (i < arr1.length || j < arr2.length) {
            if (arr2[j] < arr1[i] && arr1[i] != undefined && arr2[j] != undefined) {
                results.push(arr1[i]);
                i++;
            } else {
                if (arr1[i] != undefined && arr2[j] != undefined) {
                    results.push(arr2[j])
                    j++;
                }
            }
            if (arr1[i] == undefined) {
                results.push(arr2[j])
                j++;
            }
            if (arr2[j] == undefined) {
                results.push(arr1[i])
                i++;
            }
        }
        return results;
    }

}
if (process.env.USERNAME === "Raushan Singh") {
    runProgram(`5
    2 3 1 4 5`);
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