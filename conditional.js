let n=-5
if(n>0)
    console.log(`${n} is a positive integer`)
else if(n<0)
    console.log(`${n} is a negative integer`)
else
     console.log(`${n} is a zero`)

     //Switch-Case Statements
let day=7
switch(day){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid day")         
}

// ternary operater
let age=25
console.log(age >= 18 ? "voter" : "nonvoter")

//for loop
for(let i = 1;i <= 10;i++){
    console.log(i)
}

//Reverse for loop
for(let i = 10;i >= 1;i--){
    console.log(i)

}