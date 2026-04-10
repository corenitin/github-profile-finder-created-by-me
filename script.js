const githubApiUrl = "https://api.github.com/users/"
const title = document.querySelector("title")
const inputBar = document.querySelector("input")
const errorOfInput = document.getElementById("error-of-input")
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
    console.log(user);

    const responce = await fetch(githubApiUrl + user)
    if (responce.status == 404) {
        alert(`Please enter username`)

    } else {
        let userData = await responce.json()

        title.textContent = userData.login

        profileOfUser.classList.add("profile-box")

        userAcLink.href = userData.html_url
        userAcLink.textContent = `${userData.login}`

        avatar.src = userData.avatar_url
        nameOfuser.textContent = `${userData.name}`
        bioOfuser.textContent = `${userData.bio}`

        followersOfUser.href = `https://github.com/${user}?tab=followers`
        followersOfUser.textContent = `Followers: ${userData.followers}`

        followingOfUser.href = `https://github.com/${user}?tab=following`
        followingOfUser.textContent = `Following: ${userData.following}`

        repoOfUser.href = `https://github.com/${user}?tab=repositories`
        repoOfUser.textContent = `Repositories: ${userData.public_repos}`
        inputBar.value = ""
    }

}

inputBar.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        findUser(inputBar.value.toLowerCase())
    }

})

searchBtn.addEventListener('click', () => {
    findUser(inputBar.value)
})

