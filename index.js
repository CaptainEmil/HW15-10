"use strict";

console.clear();

const arr = [1, 2, 3, 4, 5];
const element='start';
let tempArr=[];


for(let i=0;i<arr.length;++i){
    tempArr[i+1]=arr[i];
}

tempArr[0]=element;

tempArr.map((x,i)=>arr[i]=x);

console.log(arr);
