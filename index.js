"use strict";

console.clear();

const arr = [1, 2, 3, 4, 5];
let tempArr=[];
let cnt=0;

for(let i=arr.length-1;i>=0;i--){
    tempArr[arr.length-i-1]=arr[i];
}

tempArr.map((x,i)=> arr[i]=x);

console.log(arr);
