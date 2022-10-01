function guestchecker (guestname){
    var guestlist = ["aish", "shital", "lalit", "shila", "joy"];
    
        if(guestlist.includes(guestname)){
            console.log("welcome!");
        }else{
            console.log("you're not invited :(");
        }
    }
    
    guestchecker("aish");
    