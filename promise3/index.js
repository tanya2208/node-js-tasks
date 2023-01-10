function returnPromise(){
    const promise = Promise.allSettled([async1(), async2(), async3()])
    return promise
}

function async1(){
    return new Promise((resolve, reject) => {
        resolve("1");
    });
}

function async2(){
    return new Promise((resolve, reject) => {
        resolve("2");
    });
}

function async3(){
    return new Promise((resolve, reject) => {
        reject(new Error("error"));
    });
}

returnPromise()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));