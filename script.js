const githubApiUrl = "https://api.github.com/users/"
const inputBar = document.querySelector("input")
const searchBtn = document.querySelector("button")
const avatar = document.querySelector("img")
const userName = document.querySelector("h1")
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

    avatar.src = userData.avatar_url
    userName.textContent = `@${userData.login}`
    nameOfuser.textContent = `Name: ${userData.name}`
    bioOfuser.textContent = `Bio: ${userData.bio}`
    followersOfUser.textContent = `Followers: ${userData.followers}`
    followingOfUser.textContent = `Following: ${userData.following}`
    repoOfUser.textContent = `Repositories: ${userData.public_repos}`
}

inputBar.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        findUser(inputBar.value)
    }

})

searchBtn.addEventListener('click', () => {
    findUser(inputBar.value)
})

