let arr = [4,7,12,3,6,1,8];

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i;j++){
            if(arr[i]<arr[j]){
                let temp = arr[i];
                arr.splice(i,1);
                arr.splice(j,0,temp);
            }
        }
    }

    return arr;
}

console.log(insertionSort(arr));

//chat gpt의 답
let arr1 = [4, 7, 12, 3, 6, 1, 8];

function insertionSort1(arr1) {
    for (let i = 1; i < arr1.length; i++) {
        let current = arr1[i]; // 현재 삽입할 값
        let j = i - 1;

        // current보다 큰 값을 오른쪽으로 이동
        while (j >= 0 && arr1[j] > current) {
            arr1[j + 1] = arr1[j];
            j--;
        }

        // 적절한 위치에 current 삽입
        arr1[j + 1] = current;
    }

    return arr1;
}

console.log(insertionSort1(arr1)); // [1, 3, 4, 6, 7, 8, 12]
