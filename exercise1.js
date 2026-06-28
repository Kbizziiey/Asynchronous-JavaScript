function getBoredActivity(){
    fetch("https://bored-api.appbrewery.com/random")
    .then(reponse => {
        if(reponse.ok){
            console.log("Data received!")
        }else{
            throw new Error("Network reponse failed");
        }
        return reponse.json();
    })
    .then(jsonformat => {
        console.log(jsonformat);
        console.log("Activity", jsonformat.activity);
    })
    .catch(error => console.error("Error",error));
    

}

getBoredActivity()