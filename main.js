// Variaveis: let(Uma variável que pode ser mudada ao longo do código) ou const(Uma variável que não pode ser mudada ao longo do código)

const linksSocialMedia = {
  github: 'JerielZi',
  youtube: 'channel/UChjk33_UbGdIqn7i7McOHOQ',
  facebook: 'jeriel.zinga',
  instagram: 'jerryzinga',
  twitter: 'jeriel_zinga'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHubLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
