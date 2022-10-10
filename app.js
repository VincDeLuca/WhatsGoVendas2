const states = document.querySelectorAll('.state, .city')



states.forEach((item) => {

    item.addEventListener('click', ()=>{

        let citySelected = item.nextElementSibling
    
        citySelected.classList.toggle('activeEx')
       
    })
})