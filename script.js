// var a=134
// var b=123.5
// var c="Paro"
// var d=false

// console.log(a)
// console.log(b)
// console.log(c)
/*/ console.log(d)
/var a = 10
var b = "10"


if (a == b) {
    console.log("Paro")
} else {
    console.log("data")
}

//strict
if (a === b) {
    console.log("Paro")
} else {
    console.log("data")
}


console.log(2 * 3)
console.log(2 ** 3)

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

// let year = 2012
// if ((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)) {
//     console.log("Paro leap year")
// } else {
//     console.log("not leap year")
// }
// let flag=0;
// let n=49
// for(let i = 2;;i++){
//     let fc=0;
//     for(var j=1;j<=i;j++)
//     {
//         if(i%j==0)
//         {
//             fc++;
//         }
//     }
//     if(fc==2)
//     {
//         if(i==n)
//         {
//             flag=1;
//            break;
//         }
//     }
// }
// if(flag==1)
// {
//     console.log("prime")
// }
// else{
//     console.log("Not a Prime")
// }
*/

var data=[10, 34,243, "hello", true]
 for(let index = 0;index <data.lenghth; index++){
    console.log(data[index]);
 }

data.push()
data.pop()
data.shift()
data.unshift()
console.log(data);



var data1=[10, 20, 30]
 var data2=[40, 50, 60]
 var newData=[100, ...data1, 200, ...data]

 console.log(newData);


// JSON

// var userData=[

// ]

// function myfun(a,b){
//     console.log("paro is Divine");
//     return a+b;
// }

// function my(a,b){
//     console.log("paro is .....");
//     return a-b;
// }

// console.log(myfun(2,3));
// console.log(my(2,3));


//Functions 
// function add(a,b){
//   //  console.log(a-b);
//     return a-b;
// }
// console.log(add(13,1));

//  const myFun= function (a,b){
//     return(a*b);
//  } 
//  console.log(myFun(2,3));
//  const myFun1 = (a,b) => a**b 
//  console.log(myFun1(2,5));

// let heading = document.getElementsByTagName("h1")
// heading[2].innerText = "Get in"



// let paru=document.getElementById("paru")




// paru.innerHTML = "<b>ADIOS</b>"
// let hola=document.getElementsByClassName("hola")
// hola[1].innerHTML = "SAVATIKA"
// const change = () => {
// let display=document.getElementById("display")
// display.innerHTML = "PARO ^ ~ ^"
// display.style.backgroundColor = "blue"
// display.style.color = "white"
// }

// Math.random()
// Math.floor()

function change(){
    let color = "#";
    let letters = "0123456789ABCDEF";
    for(let i=0;i<6;i++)
    {
        color +=letters[Math.floor(Math.random()*16)];
    }

    let display = document.getElementById("display");
    display.style.backgroundColor = color;
}












