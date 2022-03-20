const LS_KEY="users";
function saveUser(user){
   
    let val= JSON.stringify(user);//parse into a JSON String
   
    localStorage.setItem(LS_KEY, val);//send to the local storage
}