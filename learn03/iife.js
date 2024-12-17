//immediately involked function expression
//An IIFE creates its own scope, preventing variables
// inside it from polluting the global namespace.

(function chai(){ //named iife
    console.log(`DB CONNECTED`)
})(); //to write two iife's we use ; to get error free

((name) => {   //unnamed iife/simple iife
    console.log((`DB CONNECTED TWO ${name}`));
} ) ('amitesh')