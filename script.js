const content = document.querySelector('.content')

for (let k = 1; k<=30; k++){
    let img = document.createElement('img')
    img.src = `amg/${k}.jpg` 
    content.appendChild(img)
    if (k == 8){
        let url = document.createElement('a')
        url.href = 'https://professorlaytom.github.io/marie-jewelry/'
        url.textContent = 'Design de site web durant mon stage'
        content.appendChild(url)
    }
}