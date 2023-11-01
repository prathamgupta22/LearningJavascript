// Immediately Invoked Function Expressions (IIFE)
//JO FUNCTION IMMEDIATELY INVOKE HO JAAYA AFTER FUNCTION DEFINITION ()
// USED TO GET RID OF THE GLOBAL SOCPE POLLUTIOM  USS POLLUTION KO HATANA KA LIA 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// AFTER IIFE FUNCTION IT IS MUST TO HAVE A SEMICOLON

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')




