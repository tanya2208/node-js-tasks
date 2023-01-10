let sum = 0
let counter = 0
let array = [1,2,3]

function returnPromise(arr){
    return new Promise((resolve, reject) => {
        countSum(arr);
        resolve(sum);
    });
}

function countSum(arr){
    if(counter < arr.length){
        sum+=arr[counter]
        counter++
        countSum(arr)
    } else return sum
}

returnPromise(array)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));