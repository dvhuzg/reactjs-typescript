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
  description: "Description"
};
// logger_1(logger_info);
var logger_1 = (logger_info: { name1: string; price: number }): void => {
  console.log(logger_info.name1, logger_info.price);
};

// logger_1(logger_info);

// ---------------------------------------------------------
var array_spread_1: number[] = [1, 2, 3];
var array_spread_2: number[] = [4, 5];

var array_spread_3: number[] = [...array_spread_1, ...array_spread_2];
console.log(array_spread_3);

// ---------------------------------------------------------

type obj = {
  name: string;
  price: number;
};
var object_spread_1: obj = {
  name: "DoHung",
  price: 1000,
};
var object_spread_2: obj = {
  name: "HungDo",
  price: 2000,
};

var object_spread_3:obj = {
    ...object_spread_1,...object_spread_2 //trung nhau thi thang sau se de len thang truoc
 };
console.log(object_spread_3);
