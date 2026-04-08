const githubApiUrl = "https://api.github.com/users/"
const inputBar = document.querySelector("input")
const searchBtn = document.querySelector("button")
const userLink = document.getElementById("username-link")
const avatar = document.querySelector("img")
const userName = document.querySelector("h2")
const nameOfuser = document.querySelector("#name")
const bioOfuser = document.querySelector("#bio")
const followersOfUser = document.querySelector("#followers")
const followingOfUser = document.querySelector("#following")
const repoOfUser = document.querySelector("#repositories")

async function findUser(user) {
    const responce = await fetch(githubApiUrl + user)
    if (responce.status == 404) {
        nameOfuser.textContent = "User not found"
    }
    let userData = await responce.json()
    
    userLink.href = userData.html_url
    console.log(userLink.href);
    
    avatar.src = userData.avatar_url
    userName.textContent = `${userData.login}`
    nameOfuser.textContent = `${userData.name}`
    bioOfuser.textContent = `${userData.bio}`
    followersOfUser.textContent = `${userData.followers}`
    followingOfUser.textContent = `${userData.following}`
    repoOfUser.textContent = `${userData.public_repos}`
    inputBar.value = ""
}

inputBar.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        findUser(inputBar.value)
    }

})

searchBtn.addEventListener('click', () => {
    findUser(inputBar.value)
})

