// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); //semicolon necessary

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
