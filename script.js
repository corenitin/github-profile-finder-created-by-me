const githubApiUrl = "https://api.github.com/users/"
const inputBar = document.querySelector("input")
const searchBtn = document.querySelector("button")
const userAcLink = document.getElementById("username-link")
const avatar = document.querySelector("img")
const nameOfuser = document.querySelector("#name")
const bioOfuser = document.querySelector("#bio")
const followersOfUser = document.querySelector("#followers")
const followingOfUser = document.querySelector("#following")
const repoOfUser = document.querySelector("#repositories")
const profileOfUser = document.querySelector("#profile-box")

async function findUser(user) {
    const responce = await fetch(githubApiUrl + user)
    if (responce.status == 404) {
        nameOfuser.textContent = "User not found"
    }
    let userData = await responce.json()

    profileOfUser.classList.add("profile-box")
    
    userAcLink.href = userData.html_url
    userAcLink.textContent = `${userData.login}`
    
    avatar.src = userData.avatar_url
    nameOfuser.textContent = `${userData.name}`
    bioOfuser.textContent = `${userData.bio}`

    followersOfUser.href = userData.followers_url
    followersOfUser.textContent = `Followers: ${userData.followers}`

    followingOfUser.href = userData.following_url
    followingOfUser.textContent = `Following: ${userData.following}`

    repoOfUser.href = userData.repos_url
    repoOfUser.textContent = `Repositories: ${userData.public_repos}`
    inputBar.value = ""
}

inputBar.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        findUser(inputBar.value.toLowerCase())
    }

})

searchBtn.addEventListener('click', () => {
    findUser(inputBar.value)
})

