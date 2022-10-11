// Sessão FAQ

const quests = document.querySelectorAll('.quest')
const answers = document.querySelectorAll('.answer')

quests.forEach(quest => {
    quest.addEventListener('click', ()=>{
        var answer = quest.nextElementSibling
        answer.classList.toggle('activeAnswer')

        answers.forEach((item) =>{
            if(item != answer){
                item.classList.remove('activeAnswer')
            }
        })
    })
})




// Ajuste Mobile - Sessão Planos

const planos = document.querySelector('.planos')

var planosHeight = planos.clientHeight

if(window.innerWidth <= 800){
    planos.style.height = `calc(${planosHeight}px + 100px)`
    console.log(planos.style.height)
}