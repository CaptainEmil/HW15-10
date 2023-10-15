"use strict";

console.clear();

const arrInObj = [];
const arrNotInObj = [];
const obj={
    name:'Emil',
    surname:'Mirza',
    age: 13,
    university:'ADA',
    game:'Sea Of Thieves'
};
let field;



for(let i=0;i<=10;++i){
    field=prompt('Enter the field');
    if(Object.hasOwn(obj,field)){
        arrInObj.push(field);
    }
    else{
        arrNotInObj.push(field);
    }
}

console.log(`arr in obj: ${arrInObj}`);
console.log(`arr not in obj: ${arrNotInObj}`);
