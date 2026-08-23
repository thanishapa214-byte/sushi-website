// const myPromise=new Promise(function (resolve,reject){
//     setTimeout(function (){
//         resolve("task completed");
//     }, 2000);

//     });
//     myPromise.then(function(result){
//         console.log(result);
//     });



// const checkNumber=new Promise(function(resolve,rejected){
//     let number=5;
//     if (number>10){
//         resolve("number is big");
//     }else{
//         rejected("number is small");

//     }
//     });
//     checkNumber
//     .then(function(result){
//         console.log(result);
//     })
//     .catch(function (error){
//         console.log(error);
//     });



// const Promise=new Promise((resolve,rejected) => {
//     setTimeout(() => {
//         resolve("Done!");
//     }, 0);
// });
// console.log(Promise);
// Promise.then((result) => {
//     console.log(result);
//     console.log(Promise);

// });
// console.log(Promise);


// let downloadFile=new Promise((resolve, reject)=>{
//     let downloadSuccess=true;
//     console.log("file downloading");
//     setTimeout(() => {
//         if (downloadSuccess) {
//             resolve("file downloaded successfully");
//         }else{
//             reject("file download failed");
//         }
//     }, 2000);
// })

// downloadFile.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })



function downloadFile() {
    return new Promise(function(resolve, reject) {
        let downloadSuccess = true;
        console.log("File downloading...");
        setTimeout(function() {
            if (downloadSuccess) {
                resolve("File downloaded successfully");
            } else {
                reject("File download failed!");
            }
        }, 2000);
    });
}

downloadFile()
    .then(function(result) {
        console.log(result);
        console.log("Processing file...");
    })
    .catch(function(error) {
        console.log(error);
    });