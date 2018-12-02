//init github
const github = new Github;

// init UI
const ui = new UI;

const searchUser = document.querySelector("#searchUser");
searchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;
    if(userText != ''){
        github.getUser(userText)
        .then(data =>{
            // console.log(data);
            if(data.profile.message === "Not Found"){
                // Show alert
                ui.showAlert("User not Found", "alert alert-danger");
            }else{
                //Show profile
                ui.showUser(data.profile);
                //Show repos
                ui.showRepos(data.repos);

            }
            
        })
        
    }
    else{
        // Clear Profile
        ui.clearProfile();
    }
})

