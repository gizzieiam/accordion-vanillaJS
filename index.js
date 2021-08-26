const questions = document.getElementsByTagName('td')

const arrow = document.getElementsByClassName('arrow')

function showAnswer(e){
    if (e.target.className == ''){
        let answer = e.target.nextElementSibling
        let arrow = e.target.firstElementChild
        
        if (answer.className == 'answers'){

            answer.className = 'noShow'
            arrow.className = ''
        }else{
            answer.className = 'answers'
            arrow.className= 'flip'
        }
    }
    if(e.target.className == 'questions'){
        let answer = e.target.children[1]

        if (answer.className == 'answers'){
            answer.className = 'noShow'
            arrow.className = ''
        }else{
            answer.className = 'answers'
            arrow.className= 'flip'
        }
    }

}

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', showAnswer, false)
    
}