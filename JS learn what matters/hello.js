// // let a=[1,2];
// // let b=[...a];
// // b.pop();
// // console.log(a);


// // if(-1) console.log("hello") 
// // else console.log("hi")


// //
// for(var i=0;i<4;i++){
//     console.log("rosh")
// }

// const ab=()=>{
//     console.log("ab");
//     return 1;
// }
// ab();

// // for each

// let a=[1,2,3,3,45,6,7]
// a.forEach((val)=>{
//     console.log(val+5);
// })

// setTimeout(() => {
//     console.log(55)
// }, 5000);


// console.log("hey")
// setTimeout(() => {
//     console.log("hey2")
// }, 2000);
// console.log("Hey3")



// // Promises

// var ans=new Promise((res, rej)=>{
//     var x= Math.floor(Math.random()*10);
//     if(x<5) return res();
//     else return rej();
// })


// ans.then(function(){
//     console.log("success!")
// })
// .catch(function(){
//     console.log("rejection")
// })



// kaise use hota h
console.log("hi");

// function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     });
// }


// abcd();

async function abcd(){
  let raw= await  fetch(`https://randomuser.me/api/`)
  let ans= await raw.json();
  console.log(ans);
}
abcd();


