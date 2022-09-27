const logger = (a: number, b: number, ...rest: number[]): void => {
  console.log(rest);
};

// logger(1,2,3,4)

interface Info {
  name1: string;
  price: number;
  description: string;
}

const logger_info: Info = {
  name1: "TS",
  price: 1000,
  description: "Description",
};
// logger_1(logger_info);
var logger_1 =(logger_info:{name1:string, price:number}):void=>{
    console.log(logger_info.name1, logger_info.price);
}

logger_1(logger_info);
