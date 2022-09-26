const sum = (a:number, b:number):number => a+b;

const obj = (a:string, b:string):{}=> ({a:a, b:b}); //return 1 object

const Course={
    name:'ts',
    getName: function(){
        return this.name;
    }
}


console.log(sum(1,2));
console.log(obj('do', 'hung'));
console.log(Course.getName());