/*
This  program should do two things :
1) get the user main info like name , first 10 repos ,  how many repos , followers , following
2) get the user activity:
 */
const ps = require("prompt-sync")
const input = ps()
let api_url = "https://api.github.com/users/"

async function get_infos(user){
    try{
        let response = await  fetch(`${api_url}${user}`)
        const data = await response.json()
        console.log(`       UserName: ${data['login']}
        URL: ${data['url']}
        Location: ${data['location']}
        Bio: ${data['bio']}
        Followers: ${data['followers']}
        Following: ${data['following']}
        Public Repos: ${data['public_repos']}`)

    }catch(error){
        let response = await fetch(`${api_url}${user}`)
        console.log(`Something went wrong: ${error.name}/${response.status}`)
    }
}
async function get_repos(user){
    try{
        let response = await fetch(`${api_url}${user}/repos`)
        const repos = await response.json()
        if(repos.length ===0){
            console.log("-----No repos Yet---------")
        }else {
            console.log("Some Repos: ")
            for (var i = 0; i < 10; i = i + 1) {
                if(repos[i]===null || repos[i]===undefined){

                }
                else{
                    console.log(`${i + 1}) ${repos[i]['html_url']}`)
                }
            }
        }
    }catch (err){
        let response = await fetch(`${api_url}${user}/repos`)
        console.log(`Something went wrong: ${err.name}/${response.status}`)
    }
}
async function get_activity(user){
    try{
        let response = await fetch(`${api_url}${user}/events`)
        const activity = await response.json()
        if(activity.length === 0){
            console.log("-----No Activity Yet--------")
        }
        else{
            console.log("Recent Events: ")
            for (var i = 0; i < 5; i = i + 1) {
                console.log(`- ${activity[i]['type']} in ${activity[i]['repo']['name']}, URl: ${activity[i]['repo']['url']}`)
            }
        }
    }catch(err){
        let response = await fetch(`${api_url}${user}/events`)
        console.log(`Something went wrong: ${err.name}/${response.status}`)
    }
}
function separator(){
    console.log("======================================")
}

async function main(){
    let name = input("Enter the name of the user you want to check : ")
    while(name.length<1 || typeof name == 'number'){
        name = input("Please enter a valid name : ")
    }
    await get_infos(name)
    separator()
    await get_repos(name)
    separator()
    await get_activity(name)
}

main()