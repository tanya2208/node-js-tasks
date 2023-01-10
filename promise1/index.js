function returnPromise(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send(); 
        xhr.onload = () => {
            resolve(xhr.response.body);
        };
        xhr.onerror  = () => { 
            reject(new Error('Failed connection')); 
        };
    });
}