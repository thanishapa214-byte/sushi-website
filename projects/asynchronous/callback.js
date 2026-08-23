// function greet(name, callback){
//     console.log("hello " +name);
//     callback();
// }
//     function saybye() {
//         console.log("goodbye!");
//     }
//     greet("john", saybye);

// function downloadfile(callback){
//     console.log("downloading file...");
//     setTimeout(function () {
//         console.log("download completed");
//         callback();
//     }, 2000);
//     }
//     function processfile(){
//         console.log("processing file...");
//     }
//     downloadfile(processfile);

// function loginuser(username,callback){
//     console.log("logging in " + username + "....");
//     settimeout(function(){
//         console.log("login successful!");
//         callback(username);

//     })
// }
function placeorder(item,callback){
    console.log("placing order for " + item + "....");
    setTimeout(function (){
        console.log("order placed");
        callback(item);
    }, 2000);
}
function shiporder(item,callback){
    console.log("shipping " + item +"...");
    setTimeout(function() {
        console.log("order shipped!");
        callback(item);
    }, 2000);
}
    function deliverorder(item){
        console.log(item + " delivered to your door!");
    }
    placeorder("laptop", function(item) {
        shiporder(item, function(item) {
            deliverorder(item);
        });
    });
        