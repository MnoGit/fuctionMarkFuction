function hello(name){

    return m => name + m ;

} 

const h = hello("mno ")
const w = hello("nath")

console.log(h("welcom "));
console.log(h("hello "));

