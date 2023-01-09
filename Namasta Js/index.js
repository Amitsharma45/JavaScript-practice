function x(){
    b();
    function b(){
        console.log(a)
        a=10;
        console.log(a);
    }
}
let a= 1;
console.log(a);
x();
console.log('update',a)