type ResultObject = {
    [index: string]: string|number
}
type ArrayParam = ((number|string)[])[]
function arrToObj( arr: ArrayParam ) {
    return arr.reduce(( obj: ResultObject,item: (number|string)[] ) : ResultObject=> {
        return {...obj,[item[0]] : item[1]};
    },{})
}
const obj1 = arrToObj([
    ['name', 'Duc Long'], 
    ['age', 18], 
    ['address', 'Ha Noi']
 ])
console.log(obj1);