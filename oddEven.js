function isEven (num){
    return (num %2==0)? true : (num < 0 )? "???" : false ;
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));