//destructuring

//Array
const array:number[] = [1,2,3];
// const [a,b,c] = array;

const [a,...rest] = array;
console.log(a);

console.log(rest);


//Object
interface Course {
    name1:string,
    price: number,
    desc:string
}
var course:Course= {
    name1:'TS',
    price:1000, 
    desc:'123'
}

var {name1, price , desc = '123456'} = course;

console.log(name1, price, desc);


