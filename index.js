var matrix = [
    [9, 8, 7, 6],
    [2, 3, 4, 5],
    [1, 9, 8, 7],
    [3, 4, 5, 6]
];
var n = matrix.length
var sum = 0;
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        if (i == j) {
            sum = sum + matrix[i][j];
        }
    }
}

function sumDiagonal() {
    document.getElementById("sumDia").innerText = sum;
}