
// Task 31: 
// No Users.

let usernames = ["amjad", "khan", "ali", "sheri", "tahreem", "dawood", "hira hassan"];
console.log(usernames);
let isEmpty = usernames.length;

if (isEmpty === 0) {
    console.log("We need to find some users!");
}else{
    console.log("After removing values");
    while(usernames.length > 0) {
        usernames.pop();
    }
}
console.log(usernames);



