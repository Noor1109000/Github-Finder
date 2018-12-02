class UI{
    constructor(){
        this.profile = document.getElementById("profile");
    }



    // show user profile
    showUser(user){
        // console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                       <img class="img-fluid mb-2" src="${user.avatar_url}"> 
                       <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followes: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Company: ${user.blog}</li>
                            <li class="list-group-item">Company: ${user.location}</li>
                            <li class="list-group-item">Company: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div> 
            <h3 class="page-heading mb-3">Latest Repos</h3>        
            <div id="repos"></div>   
        `;
        
    }

    // show user repository
    showRepos(repos){
        
        let output = '';

        repos.forEach(function(repo){
            output +=`
            <div class="card card-body">
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-6">
                        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                        <span class="badge badge-primary">Watchers: ${repo.watchers_count}</span>
                        <span class="badge badge-primary">Fork: ${repo.forks_count}</span>
                    </div>  
                </div>
            
            </div>
            `
        })

        document.getElementById("repos").innerHTML = output;
       
    }

    // show alert
    showAlert(message, className){
        this.clearAlert();
        // create div
        const div = document.createElement("div");

        // Add classes
        div.className = className;

        // Add text
        div.appendChild(document.createTextNode(message));

        // container
        const container = document.querySelector(".searchContainer");

        // Get search box
        const search = document.querySelector(".search");

        // insert alert
        container.insertBefore(div, search);

        //set timeout
        setTimeout(()=>{
            this.clearAlert();
        }, 3000)

    }

    // clear Alert
    clearAlert(){
        const clearAlert = document.querySelector(".alert");
        if(clearAlert){
            clearAlert.remove();
        }
    }





    clearProfile(){
        this.profile.innerHTML = ' ';
    }
}