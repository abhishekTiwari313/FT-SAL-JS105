function printSumOfIndexes(N, M, arr) {
    for (let i = 0; i < N; i++) {
        let row = ""; 
        for (let j = 0; j < M; j++) {
            row += (i + j); 
            if (j < M - 1) { 
                row += " ";
            }
        }
        console.log(row); 
    }
}


const N = 3;
const M = 2;
const arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

printSumOfIndexes(N, M, arr);
