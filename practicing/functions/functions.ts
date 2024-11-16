//   
function addTwo(num:number):number{
    return num+2
}
console.log(addTwo(5))


//   
function upperCase(val:string):string{
    return val.toUpperCase()
}
console.log(upperCase('heello'))


//  
function signIn(name:string,email:string,isBlock:boolean){
}
console.log(signIn('faizal','faizal@gmail.com',false));


//  
let loginUser=(name:string,email:string,isBlocked:boolean=false)=>{
}
console.log(loginUser('fa','@gmail.com'))


//
function getVal(num:number){    //   function getVal(num: number): true | "200 ok"
    if(num<5){
        return true
    }
    return '200 ok'
}


// usign type safety in map()
const heros=['superman','ironman','spiderman']
heros.map((hero):string=>{
    return `hello ${hero}`
})

export {}