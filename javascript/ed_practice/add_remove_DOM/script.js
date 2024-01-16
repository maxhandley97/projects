function activity() {
    let a = document.querySelector('a')
    a.innerHTML = "DOM Manipulation"

    let ul = document.querySelector('ul')
    let lil = ul.children[3]
    ul.removeChild(lil)


    let form = document.querySelector('form')
    let name = document.createElement('span')
    name.innerHTML = "name:"
    form.insertBefore(name, form.firstChild)

    let answer = document.createElement('p')
    let question = document.querySelector('#question')
    answer.innerHTML = "42"
    question.appendChild(answer)
    
}

activity()
