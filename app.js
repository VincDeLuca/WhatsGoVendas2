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