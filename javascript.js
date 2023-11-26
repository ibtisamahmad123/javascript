let names = []
for(let a = 0 ; a<5 ; a++){
    let username = prompt("create a username")
    if (username!="admin" && username!= "ADMIN" && username!= "Admin"){
        if (username.length>=5 && username.length<=20){
            names.push(username)
            console.log("username added")
            }
        else{
        console.log("invalid name")
        
        }
    
    }
    else{
        console.log("invalid name")
    }
}