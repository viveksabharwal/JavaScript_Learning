/*Prefer not to use "var" because of issue in block scope and functional scope insted of "var" use "let" */
const AccoundId = 8522069;
let AccountEmail = "abc@Id.com";
var AccountPassword = "86322";
AccountCity = "Delhi";

/*const AccoundId = 899654;  cannot be reassigned a value and can't be declared again (block scope).
 let AccountEmail = "rtggb@Id.com";  can re-assigned a value but can't declared again (block scope).*/
 AccountEmail = "rtggb@Id.com"; 
 var AccountPassword = "022000"; //values can be reassigned and redeclared again.
AccountCity = "Mumbai";  //we can declare any varibales without using let or var but it is not a good practice.
let AccountState;  //if we are not declaring any value in the varibale then js will consider it as "undefined"

console.log(AccountId);
console.table([AccoundId,AccountEmail,AccountPassword,AccountCity,AccountState])  //to display multiple outputs at once.

