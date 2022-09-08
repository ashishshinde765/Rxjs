
// async word with function always return promise
// async function getData(){
//     return 'Data Recieved';
// }
// getData().then(data => console.log(data));

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data Recieved");
//     }, 3000)
// })

// async function getData(){
//     let response = await promise;
//     console.log(response);
// }

// getData();

// Ex - 01 : With Promise

let result1 = document.getElementById('result');
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");

dell = {
  BrandName: "Dell",
  HardDisk: '2 Tb',
};


let laptop = new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(dell);
    }, 3000)
})
let laptop2 = fetch("https://jsonplaceholder.typicode.com/posts")
              .then(response => response.json())

// function fetch(){
//     result1.innerHTML = "Fetching the data......";
//     laptop.then(res => {
//         result1.innerHTML = JSON.stringify(res)
//     })
// }

// // Ex - 02 : With async / await

// async function fetch2(){
//     result2.innerHTML = "Fetching the data ...."

//     let res = await laptop;
//     result2.innerHTML = JSON.stringify(res)
// }



// Ex - 03 : With async / await

// function fetch3(){
//     result3.innerHTML = "Fetching the data ....";
//     laptop2.then(res => {
//        result3.innerHTML = JSON.stringify(res);
//     });
// }

async function fetch3(){
    result3.innerHTML = "Fetching the data....";
    let res = await laptop2;
    result3.innerHTML = JSON.stringify(res);
}