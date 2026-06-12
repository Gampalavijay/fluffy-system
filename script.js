// var a=134
// var b=123.5
// var c="Paro"
// var d=false

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
var a = 10
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
let flag=0;
let n=49
for(let i = 2;;i++){
    let fc=0;
    for(var j=1;j<=i;j++)
    {
        if(i%j==0)
        {
            fc++;
        }
    }
    if(fc==2)
    {
        if(i==n)
        {
            flag=1;
           break;
        }
    }
}
if(flag==1)
{
    console.log("prime")
}
else{
    console.log("Not a Prime")
}












