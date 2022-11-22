let myNumber = 0


function increase(){
    myNumber++
    showOnScreen()
}

function diminish(){
    myNumber--
    showOnScreen()
}
function showOnScreen(){
    const number = document.querySelector('.number')
    number.innerText = myNumber
}

document.addEventListener('keydown',  ({key}) => {
    if(key==='ArrowLeft'){ 
        diminish()
    }
}  )


document.addEventListener('keydown',  ({key}) => {
    if(key==='ArrowRight'){ 
        increase()
    }
}  )
